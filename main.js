// smooth scrolling
$("#main-nav a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// sticky menu transparency
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector("#main-nav").style.opacity = 1;
  } else {
    document.querySelector("#main-nav").style.opacity = 9;
  }
});

// /////////////////////////////////////////////////////////////

var addItemId = 0;


// /////////////////////////////

const cartContainer = document.querySelector('#cartitem'); 

// /////////////////////////////////

function addToCart(item) {
  addItemId += 1;
  cartContainer.append(item)
  console.log(cartContainer, item);

  //   /////////////////////////////
  var selectedItem = document.createElement("div");
  selectedItem.classList.add("cartImg");
  selectedItem.setAttribute("id", addItemId);


}

console.log(cartContainer);