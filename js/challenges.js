// Sample API response simulation
const apiData = [
  {
    id: 1,
    title: "FizzBuzz",
    difficulty: "Easy",
    description: "Write a program that prints the numbers from 1 to 100. But for multiples of 3, print 'Fizz'..."
  },
  {
    id: 2,
    title: "Palindrome Checker",
    difficulty: "Medium",
    description: "Check whether a given string is a palindrome. Ignore punctuation and spaces."
  },
  {
    id: 3,
    title: "Sudoku Solver",
    difficulty: "Hard",
    description: "Write a function that solves a given Sudoku board using backtracking."
  }
];

// Inject challenges to DOM
const challengeList = document.getElementById("challenge-list");

function renderChallenges(data) {
  challengeList.innerHTML = "";
  data.forEach(challenge => {
    const card = document.createElement("div");
    card.className = "challenge-card";
    card.innerHTML = `
      <h3>${challenge.title}</h3>
      <p><strong>Difficulty:</strong> ${challenge.difficulty}</p>
      <p>${challenge.description}</p>
    `;
    challengeList.appendChild(card);
  });
}

// Filter logic
const checkboxes = document.querySelectorAll(".filters input[type=checkbox]");
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    const activeFilters = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    
    if (activeFilters.length === 0) {
      renderChallenges(apiData);
    } else {
      const filtered = apiData.filter(ch => activeFilters.includes(ch.difficulty));
      renderChallenges(filtered);
    }
  });
});

// Initial load
renderChallenges(apiData);
