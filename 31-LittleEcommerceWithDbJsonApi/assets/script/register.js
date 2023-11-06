let registerForm = document.querySelector("form");
let balanceInput = document.querySelector("#balance");
let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let emailInput = document.querySelector("#email");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (/[A-Z]/.test(passwordInput.value) && usernameInput.value.length > 3) {
    axios
      .get(`http://localhost:3000/users?username=${usernameInput.value}`)
      .then((res) => {
        if (res.data.length === 0) {
          axios
            .post("http://localhost:3000/users", {
              email: emailInput.value,
              username: usernameInput.value,
              password: passwordInput.value,
              balance: balanceInput.value,
              order: [],
            })
            .then(() => {
              window.location.href = "http://127.0.0.1:5500/index.html";
              emailInput.value = "";
              usernameInput.value = "";
              passwordInput.value = "";
              balanceInput.value = "";
            });
          window.location.href = "http://127.0.0.1:5500/login.html";
        } else {
          alert("Username is already in use. Please choose another username.");
        }
      });
  } else {
    alert(
      "One uppercase letter is required in the password, and the username should be more than 3 letters."
    );
  }
});
