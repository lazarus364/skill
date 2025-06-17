document.getElementById("home").addEventListener("click", function () {
    window.location.href = "/index.html";
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-container");
    const emailInput = form.querySelector('input[name="email"]');
    const passwordInput = form.querySelector('input[name="password"]');
  
    form.addEventListener("login", function (e) {
      e.preventDefault(); // prevent default form submission
  
      clearErrors();
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      let hasError = false;
  
      // Email validation
      if (!validateEmail(email)) {
        showError(emailInput, "Please enter a valid email address.");
        hasError = true;
      }
  
      // Password validation
      if (password.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters.");
        hasError = true;
      }
  
      if (hasError) {
        showToast("Please correct the errors in the form.", "error");
        return;
      }
  
      // Simulate successful login
      showToast("Logging in...", "success");
  
      // Simulate delay before form submission
      setTimeout(() => {
        form.submit(); // proceed with actual submission
      }, 1500);
    });
  
    function validateEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  
    function showError(input, message) {
      const error = document.createElement("div");
      error.className = "error-message";
      error.textContent = message;
      input.parentNode.insertBefore(error, input.nextSibling);
      input.classList.add("input-error");
    }
  
    function clearErrors() {
      const errors = document.querySelectorAll(".error-message");
      errors.forEach(e => e.remove());
  
      const inputs = document.querySelectorAll(".input-error");
      inputs.forEach(i => i.classList.remove("input-error"));
    }
  
    function showToast(message, type = "success") {
      const toast = document.createElement("div");
      toast.className = `toast ${type}`;
      toast.textContent = message;
      document.body.appendChild(toast);
  
      setTimeout(() => toast.classList.add("show"), 100);
      setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }
  });
// CSS for toast notifications  