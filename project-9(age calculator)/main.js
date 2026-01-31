function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const error = document.getElementById("error");
  const ageText = document.getElementById("age");
  const nextBirthdayText = document.getElementById("nextBirthday");

  if (!dobInput) return;

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    error.textContent = "Date of birth cannot be in the future ❌";
    ageText.textContent = "";
    nextBirthdayText.textContent = "";
    return;
  }

  error.textContent = "";

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += lastMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  ageText.textContent = `You are ${years} years, ${months} months, and ${days} days old`;

  // 🎂 Next birthday countdown
  let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diffTime = nextBirthday - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  nextBirthdayText.textContent = `🎂 Next birthday in ${diffDays} days `;
}

// 🔄 Auto-update once per day
setInterval(calculateAge, 86400000);
