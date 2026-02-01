let number = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

function check() {
  let guess = Number(document.getElementById("guess").value);
  attempts++;
  document.getElementById("count").innerText = attempts;

  if (guess === number) {
    document.getElementById("msg").innerText = "🎉 Correct!";
  }else if(guess==number-1 || guess==number-2){
    document.getElementById("msg").innerText="near but High"
  }else if(guess==number+1 || guess==number+2){
    document.getElementById("msg").innerText="near but Low"
  }else if (guess > number) {
    document.getElementById("msg").innerText = "Too High";
  } else {
    document.getElementById("msg").innerText = "Too Low";
  }
}

function restart() {
  number = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  document.getElementById("count").innerText = 0;
  document.getElementById("msg").innerText = "";
  document.getElementById("guess").value = "";
}
