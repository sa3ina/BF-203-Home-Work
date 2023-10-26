let buttons = document.querySelectorAll(".accordion .accordion-header button");
let accordion = document.querySelectorAll(".accordion-item");

console.log(accordion);
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  let item = accordion[i];
  let accordionItemBody = button.parentElement.nextElementSibling;
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (accordionItemBody.style.display == "block") {
      accordionItemBody.style.display = "none";
      button.innerHTML = `<button><i class="fa-solid fa-chevron-down"></i></button>`;
      item.style.backgroundImage = "none";
    } else {
      for (let j = 0; j < buttons.length; j++) {
        if (i != j) {
          let otherAccordionItem = accordion[j];
          let otherAccordionItemBody =
            buttons[j].parentElement.nextElementSibling;
          otherAccordionItemBody.style.display = "none";
          buttons[
            j
          ].innerHTML = `<button><i class="fa-solid fa-chevron-down"></i></button>`;
          otherAccordionItem.style.backgroundImage = "none";
        }
      }
      accordionItemBody.style.display = "block";
      button.innerHTML = `<button>
      <i class="fa-solid fa-circle-xmark"></i>
    </button>`;
      item.style.backgroundImage =
        "url(https://w0.peakpx.com/wallpaper/502/479/HD-wallpaper-danish-aesthetic-danish-pastel.jpg)";
    }
  });
}
