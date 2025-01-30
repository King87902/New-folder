document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const emailPhone = document.getElementById("email-phone").value.trim();
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const termsChecked = document.getElementById("terms").checked;

    let isValid = true;

    if (firstName === "") {
      showError("first-name-error", "First name is required.");
      isValid = false;
    }

    if (lastName === "") {
      showError("last-name-error", "Last name is required.");
      isValid = false;
    }

    if (emailPhone === "") {
      showError("email-phone-error", "Email or phone number is required.");
      isValid = false;
    } else if (!validateEmail(emailPhone) && !validatePhone(emailPhone)) {
      showError(
        "email-phone-error",
        "Please enter a valid email or phone number."
      );
      isValid = false;
    }

    if (dob === "") {
      showError("dob-error", "Date of birth is required.");
      isValid = false;
    }

    if (password === "") {
      showError("password-error", "Password is required.");
      isValid = false;
    } else if (!validatePassword(password)) {
      showError(
        "password-error",
        "Password must be at least 8 characters, contain one uppercase letter, one number, and one special character."
      );
      isValid = false;
    }

    if (confirmPassword === "") {
      showError("confirm-password-error", "Please confirm your password.");
      isValid = false;
    } else if (password !== confirmPassword) {
      showError("confirm-password-error", "Passwords do not match.");
      isValid = false;
    }

    if (!termsChecked) {
      showError(
        "terms-error",
        "You must agree to the Terms and Privacy policy."
      );
      isValid = false;
    }

    if (isValid) {
      alert("Account created successfully!");
    }
  });

s;
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => {
    error.textContent = "";
    error.style.display = "none";
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(String(phone));
}

function validatePassword(password) {
  const re =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  return re.test(String(password));
}
