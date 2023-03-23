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