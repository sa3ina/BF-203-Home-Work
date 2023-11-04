let container = document.querySelector(".container");
let id = new URLSearchParams(location.search).get("id");
let name = new URLSearchParams(location.search).get("name");
if (name == "singer") {
  axios("http://localhost:3000/singers").then((res) => {
    let singer = res.data.find((item) => {
      if (item.id == id) {
        return item;
      }
    });
    container.innerHTML = `<div class="card" style="width: 40%">
        <img
          src="${singer.image}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${singer.name}</h5>
          <p class="card-text">${singer.name} is 
            ${singer.nationality}
          </p>
          <p class="card-text">Age:
            ${singer.age}
          </p>
          <p class="card-text">Genre:
            ${singer.genre}
          </p>
          <a href="index.html?id=${singer.id}"> <button class="detail btn btn-outline-primary">Home</button></a>
        </div>
        </div>`;
  });
} else {
  axios("http://localhost:3000/meals").then((res) => {
    let meal = res.data.find((item) => {
      console.log(res.data);
      if (item.id == id) {
        return item;
      }
    });
    container.innerHTML = `<div class="card" style="width: 40%">
        <img
          src="${meal.image}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${meal.name}</h5>
          
          <p class="card-text">Price:
          <strong>
            ${meal.price} $ </strong>
          </p>
          <p class="card-text">Ingredients:
            ${meal.ingredients} 
          </p>
          <a href="meals.html?id=${meal.id}"> <button class="detail btn btn-outline-primary">Home</button></a>
        </div>
        </div>`;
  });
}
