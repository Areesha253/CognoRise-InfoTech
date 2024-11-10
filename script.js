var operatorsActionArray = [
  "add",
  "subtract",
  "multiply",
  "divide",
  "percentage",
  "add-subtract",
];
var currentInput = "";
var operator = "";
var previousInput = "";

$(".operators").on("click", function () {
  var action = $(this).data("action");
  action === "clear"
    ? clear()
    : operatorsActionArray.includes(action)
    ? handleOperator(action)
    : action === "calculate"
    ? calculate()
    : action === "mantissa"
    ? addDecimal()
    : addNumber(action);
});

const clear = () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  $("#display").val("");
}

const addNumber = (number) => {
    const numberMap = {
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
        zero: "0",
    };

    currentInput.length < 10
        ? (currentInput += numberMap[number], $("#display").val(currentInput))
        : null;
};

const addDecimal = () =>
  !currentInput.includes(".")
    ? ((currentInput += "."), $("#display").val(currentInput))
    : null;

const handleOperator = (action) =>
  currentInput === ""
    ? null
    : (operator && calculate(),
      (operator = action),
      (previousInput = currentInput),
      (currentInput = ""));

const calculate = () => {
  if (previousInput === "" || currentInput === "") return;

  var result;
  var prev = parseFloat(previousInput);
  var current = parseFloat(currentInput);

  switch (operator) {
    case "add":
      result = prev + current;
      break;
    case "subtract":
      result = prev - current;
      break;
    case "multiply":
      result = prev * current;
      break;
    case "divide":
      result = prev / current;
      break;
    case "percentage":
      result = (prev * current) / 100;
      break;
    case "add-subtract":
      result = -current;
      break;
    default:
      return;
  }

  $("#display").val(result);
  currentInput = result.toString();
  previousInput = "";
  operator = "";
};
