document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset error messages
  ["nameError", "emailError", "messageError"].forEach(id => {
    document.getElementById(id).textContent = "";
  });
  document.getElementById("successMessage").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }
  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
    // Optionally reset form:
    // this.reset();
  }
});