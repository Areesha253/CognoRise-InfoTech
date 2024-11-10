$(".bmi-form").on("submit", function (e) {
  e.preventDefault();

  var name = $("#name").val();
  var gender = $("#male:checked, #female:checked");
  var age = parseInt($("#age").val());
  var height = $("#height").val() / 100;
  var weight = $("#weight").val();

  if (!name || !gender.length || !age || !height || !weight) {
    alert("Please Fill up All Fields!");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  $(".bmi-result").text(`Your BMI is: ${bmi} (${category})`);

  $(".bmi-range-result, .range-category-txt").removeClass("highlighted");

  $(".range-category-txt").each(function () {
    var targetedCategory = $(this);
    var categoryData = targetedCategory.data("category");
    if (categoryData === category) {
      targetedCategory.closest(".bmi-range-result").addClass("highlighted");
      targetedCategory.addClass("highlighted");
    }
  });
});
