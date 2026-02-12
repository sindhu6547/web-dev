const searchBtn = document.getElementById("searchBtn");
const usernameInput = document.getElementById("username");
const profileDiv = document.getElementById("profile");

searchBtn.addEventListener("click", fetchProfile);

async function fetchProfile() {
  const username = usernameInput.value.trim();

  if (username === "") {
    profileDiv.innerHTML = "<p class='error'>Please enter a username</p>";
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();

    displayProfile(data);

  } catch (error) {
    profileDiv.innerHTML = `<p class='error'>${error.message}</p>`;
  }
}

function displayProfile(user) {
  profileDiv.innerHTML = `
    <div class="card">
      <img src="${user.avatar_url}" alt="Avatar">
      <h2>${user.name || user.login}</h2>
      <p>${user.bio || "No bio available"}</p>

      <div class="stats">
        <div>
          <h3>${user.followers}</h3>
          <p>Followers</p>
        </div>
        <div>
          <h3>${user.following}</h3>
          <p>Following</p>
        </div>
        <div>
          <h3>${user.public_repos}</h3>
          <p>Repos</p>
        </div>
      </div>

      <br>
      <a href="${user.html_url}" target="_blank" style="color:#58a6ff;">
        View Profile
      </a>
    </div>
  `;
}