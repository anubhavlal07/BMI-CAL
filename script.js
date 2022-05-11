var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
function validateForm() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  } else {
    countBmi();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
  var p = [height.value,age.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }
  // form.reset();
  var bmi = Number(p[1]) / (((Number(p[2]) / 100) * Number(p[2])) / 100);
  var result = "";
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Healthy";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Overweight";
  } else {
    result = "Obese";
  }
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");
  var res = document.createTextNode(result);
  var b = document.createTextNode("BMI: ");
  var value = document.createTextNode(parseFloat(bmi).toFixed(2));
  h1.appendChild(res);
  h2.appendChild(b);
  h2.appendChild(value);
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);

  function clearForm() {
    location.reload();
  }
  setInterval(clearForm, 5000);
}
document.getElementById("submit").addEventListener("click", countBmi);
