let profilecard = document.querySelector(".profilecard");
let orderHistory = document.querySelector(".orderHistory");
let ulElem = document.querySelector(".list-group-flush");
axios("http://localhost:3000/users").then((res) => {
  let userInfo = JSON.parse(localStorage.getItem("users")) || [];
  console.log(userInfo);
  let user = res.data.find((user) => user.id == userInfo.usersId);
  console.log(user);
  let profilecard = document.querySelector(".profilecard");
  let orderHistory = document.querySelector(".orderHistory");
  profilecard.innerHTML = `   <div
    class="image d-flex flex-column justify-content-center align-items-center"
  >
    <button class="btn btnprofile btn-secondary"></button>
    <span class="name mt-3">${user.username}</span>

    <div
      class="d-flex flex-row justify-content-center align-items-center gap-2"
    >
      <span><i class="fa fa-copy"></i></span>
    </div>
    <div
      class="d-flex flex-row justify-content-center align-items-center mt-3"
    >
      <span class="number">Balance: ${user.balance}$
    </div>
    <div class="d-flex mt-2">
      <strong></strong>
    </div>
    <div class="text mt-3 orderHistory">
    </div>
    <div
      class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"
    >
    </div>
  </div>`;

  user.order.forEach((element) => {
    console.log(element.userId);

    ulElem.innerHTML += `<li class="list-group-item">${element.userId} ${element.time}</li>`;
  });
});
