let login = document.querySelector("#login");
let userInput = document.querySelector("#usernameLogin");
let passInput = document.querySelector("#passwordLogin");

login.addEventListener("submit", function (e) {
  e.preventDefault();
  axios("http://localhost:3000/users").then((res) => {
    res.data.forEach((data) => {
      console.log(res.data);
      let user = res.data.find(
        (userInfo) =>
          userInput.value == userInfo.username &&
          passInput.value == userInfo.password
      );
      if (user) {
        localStorage.setItem(
          "users",
          JSON.stringify({ isLogged: true, usersId: user.id })
        );
        console.log("true");
        window.location.href = "http://127.0.0.1:5500/index.html";
      } else {
        Swal.fire({
          icon: "error",
          text: "This account doesnt exist. Incorrect username or password",
          position: "bottom-right",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  });
});
