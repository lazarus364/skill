// Simulated score and feedback storage (you can replace with localStorage, API, etc.)
const result = sessionStorage.getItem("score") || "85%";
const feedback = sessionStorage.getItem("feedback") || "Great job! You solved most of the problems correctly.";

// Populate the page
document.getElementById("score").textContent = result;
document.getElementById("feedback").textContent = feedback;
