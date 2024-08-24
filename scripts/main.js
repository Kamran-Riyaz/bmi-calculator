document.addEventListener("DOMContentLoaded", function () {
  const bmiForm = document.getElementById("bmiForm");
  const clearBtn = document.getElementById("clearBtn");
  const result = document.getElementById("result");
  const weightInput = document.getElementById("weight");
  const heightFeetInput = document.getElementById("heightFeet");
  const heightInchesInput = document.getElementById("heightInches");

  bmiForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = parseFloat(weightInput.value);
    const heightFeet = parseFloat(heightFeetInput.value);
    const heightInches = parseFloat(heightInchesInput.value) || 0;

    if (weight > 0 && heightFeet >= 0 && heightInches >= 0) {
      // Convert height from feet and inches to meters
      const heightInMeters = (heightFeet * 12 + heightInches) * 0.0254;

      const bmi = (weight / heightInMeters ** 2).toFixed(2);

      let classification;
      let className;
      if (bmi < 18.5) {
        classification = "Underweight";
        className = "bmi-underweight";
      } else if (bmi <= 24.9) {
        classification = "Normal weight";
        className = "bmi-normal";
      } else if (bmi <= 29.9) {
        classification = "Overweight";
        className = "bmi-overweight";
      } else {
        classification = "Obesity";
        className = "bmi-obesity";
      }

      result.innerHTML = `
        <h4>Your BMI is ${bmi}</h4>
        <p class="bmi-result ${className}">${classification}</p>
      `;
    } else {
      result.innerHTML = `
        <p class="text-danger">Please enter valid values.</p>
      `;
    }
  });

  clearBtn.addEventListener("click", function () {
    // Clear all input fields
    weightInput.value = "";
    heightFeetInput.value = "";
    heightInchesInput.value = "";

    // Clear the result display
    result.innerHTML = "";
  });
});
