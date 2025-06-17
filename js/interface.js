function runCode() {
    const input = parseInt(document.getElementById("input").value);
    const outputBox = document.getElementById("output");
  
    function factorial(n) {
      return n <= 1 ? 1 : n * factorial(n - 1);
    }
  
    function BracketCombinations(num) {
      return factorial(2 * num) / (factorial(num + 1) * factorial(num));
    }
  
    if (isNaN(input) || input < 0) {
      outputBox.textContent = "Please enter a non-negative integer.";
      return;
    }
  
    const result = BracketCombinations(input);
    outputBox.textContent = `Output: ${result}`;
  }
  