const apiKey = "21fa0669";

async function searchMovie() {
  const movieName = document.getElementById("movieInput").value;
  const resultDiv = document.getElementById("movieResult");

  if (movieName === "") {
    resultDiv.innerHTML = "<p class='error'>Please enter a movie name</p>";
    return;
  }

  resultDiv.innerHTML = "Loading...";

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
    );
    const data = await response.json();

    if (data.Response === "False") {
      resultDiv.innerHTML = `<p class="error">${data.Error}</p>`;
      return;
    }

    resultDiv.innerHTML = `
      <img src="${data.Poster}" alt="Movie Poster">
      <div class="movie-info">
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Type:</strong> ${data.Type}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
      </div>
    `;
  } catch (error) {
    resultDiv.innerHTML = "<p class='error'>Something went wrong</p>";
  }
}