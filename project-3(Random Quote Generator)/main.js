const quotes = [
  {
    text: "Believe in yourself.",
    author: "Unknown"
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House"
  },
  {
    text: "Consistency beats motivation.",
    author: "James Clear"
  },
   {
    text: "Dream big, start small.",
    author: "Unknown"
  },
  {
    text: "Success is built one day at a time.",
    author: "Anonymous"
  },
  {
  text: "Success is the sum of small efforts repeated day after day.",
  author: "Robert Collier"
},
{
  text: "Do not watch the clock; do what it does. Keep going.",
  author: "Sam Levenson"
},
{
  text: "Great things are done by a series of small things brought together.",
  author: "Vincent Van Gogh"
},
{
  text: "The future depends on what you do today.",
  author: "Mahatma Gandhi"
},
{
  text: "It always seems impossible until it’s done.",
  author: "Nelson Mandela"
}

];
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  quoteEl.innerText = `"${quotes[randomIndex].text}"`;
  authorEl.innerText = `— ${quotes[randomIndex].author}`;
}

function copyQuote() {
  const quote = document.getElementById("quote").innerText;
  const author = document.getElementById("author").innerText;
  navigator.clipboard.writeText(`${quote} ${author}`);
  alert("Quote copied!");
}

function shareTwitter() {
  const quote = document.getElementById("quote").innerText;
  const author = document.getElementById("author").innerText;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    quote + " " + author
  )}`;
  window.open(url, "_blank");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// New quote on page refresh
window.onload = generateQuote;