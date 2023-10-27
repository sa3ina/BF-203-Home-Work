let input = document.querySelector("input");
let ul = document.querySelector("ul");

input.addEventListener("input", function () {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, index) => {
        if (element.name.toLowerCase().includes(input.value)) {
          ul.innerHTML += `<li class="list-group-item items">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                        alt=""
                      />
                    </div>
                    <div>
                      <p>${element.name}</p>
                      <p>${element.address.city}</p>
                    </div>
                  </li>`;
        }
      });
    })
    .catch((err) => console.log(err));
});
