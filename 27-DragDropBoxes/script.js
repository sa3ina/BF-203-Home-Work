let greyTier = document.querySelectorAll(".greyTier");
let greyTierBoxes = document.querySelector(".greyTierBoxes");
let greyTier1 = document.querySelector(".greyTier1");
let greyTier2 = document.querySelector(".greyTier2");
let greyTier3 = document.querySelector(".greyTier3");

console.log(greyTier);
console.log(greyTierBoxes);
console.log(greyTier3);
for (let item of greyTier) {
  item.addEventListener("dragstart", function (e) {
    //   e.preventDefault();
    let selected = e.target;

    greyTier1.addEventListener("dragover", function (e) {
      e.preventDefault();
      console.log(greyTier1);
    });

    greyTier1.addEventListener("drop", function (e) {
      e.preventDefault();

      greyTier1.appendChild(selected);
      selected = null;
    });

    //
    greyTier2.addEventListener("dragover", function (e) {
      e.preventDefault();
      console.log(greyTier2);
    });

    greyTier2.addEventListener("drop", function (e) {
      e.preventDefault();

      greyTier2.appendChild(selected);
      selected = null;
    });
    //
    greyTier3.addEventListener("dragover", function (e) {
      e.preventDefault();
      console.log(greyTier3);
    });

    greyTier3.addEventListener("drop", function (e) {
      e.preventDefault();

      greyTier3.appendChild(selected);
      selected = null;
    });
    //
    greyTierBoxes.addEventListener("dragover", function (e) {
      e.preventDefault();
      console.log(greyTier3);
    });

    greyTierBoxes.addEventListener("drop", function (e) {
      e.preventDefault();

      greyTierBoxes.appendChild(selected);
      selected = null;
    });
  });
}
