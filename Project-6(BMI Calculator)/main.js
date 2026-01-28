const weight=document.getElementById("weight")
const height=document.getElementById("height");
const bmiText=document.getElementById("bmi")
const categoryText=document.getElementById("category")
const submitBtn=document.getElementById("submit")
submit.addEventListener("click",function(e){
    e.preventDefault();
    const heightValue=height.value
    const weightValue=weight.value
     if (heightValue === "" || weightValue === "" || heightValue <= 0 || weightValue <= 0) {
    bmiText.innerText = "BMI is : --";
    categoryText.innerText = "Please enter valid values ❌";
    return;
  }

  const heightInMeters=heightValue/100;
  const bmi=weightValue/(heightInMeters*heightInMeters)
  bmiText.innerText=`BMI : ${bmi.toFixed(2)}`
    if (bmi < 18.5) {
    categoryText.innerText = "You are Underweight";
  } else if (bmi < 25) {
    categoryText.innerText = "You are Normal weight ✅";
  } else if (bmi < 30) {
    categoryText.innerText = "You are Overweight ⚠️";
  } else {
    categoryText.innerText = "You are Obese ❗";
  }
})
