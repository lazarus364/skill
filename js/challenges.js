document.getElementById("home").addEventListener("click", function () {
    window.location.href = "/index.html";
  });

const list = document.getElementById("challengeList");
const challenges = JSON.parse(localStorage.getItem("challenges")) || [];

challenges.forEach((entry, i) => {
  const [title, difficulty, description] = entry.split("|").map(x => x.trim());
  const div = document.createElement("div");
    div.className = "challenge-card";
    div.innerHTML = `
      <h3>${title || 'Untitled Challenge'}</h3>
      <p><strong>Difficulty:</strong> ${difficulty || 'Unknown'}</p>
      <p>${description || 'No description provided.'}</p>
    `;
    list.appendChild(div);
  });  