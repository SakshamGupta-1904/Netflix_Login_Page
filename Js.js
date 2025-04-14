document.addEventListener("DOMContentLoaded", function () {
    const signInBtn = document.getElementById("sign");
    const homePage = document.getElementById("home-page");
    const loginPage = document.getElementById("login-page");
    const emailInput = document.getElementById("email-input");
    const getStartedBtn = document.getElementById("start");
    const loginForm = document.getElementById("login-form");
  
    // Show Login Page
    signInBtn.addEventListener("click", function () {
      homePage.style.display = "none";
      document.querySelector(".feature").style.display = "none";
      document.querySelector(".feature.reverse").style.display = "none";
      loginPage.style.display = "block";
    });
  
    // Hide Login Page
    window.hideLogin = function () {
      homePage.style.display = "flex";
      document.querySelector(".feature").style.display = "flex";
      document.querySelector(".feature.reverse").style.display = "flex";
      loginPage.style.display = "none";
    };
  
    // Get Started button click
    getStartedBtn.addEventListener("click", function () {
      const email = emailInput.value.trim();
      if (validateEmail(email)) {
        alert(`Creating account for: ${email}`);
      } else {
        alert("Please enter a valid email address.");
      }
    });
  
    // Login form submission
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();
  
      if (!email || !password) {
        alert("Both fields are required!");
        return;
      }
  
      // Simulate login
      alert(`Logged in as ${email}`);
      hideLogin();
    });
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  