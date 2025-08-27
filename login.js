document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Demo credentials (you can change these later)
  let validEmail = "teemwangi@gmail.com";
  let validPassword = "Green_22";

  if (email === validEmail && password === validPassword) {
    alert("Login successful ");
    window.location.href = "dashboard.html"; // redirect
  } else {
    alert("Invalid email or password");
  }
});