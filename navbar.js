const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

function hideMobileMenuIfNeeded() {
  if (window.innerWidth > 767) {
    mobileMenu.style.display = "none";
  }
}

hideMobileMenuIfNeeded();

menuButton.addEventListener("click", function () {
  if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
});

window.addEventListener("resize", function () {
  hideMobileMenuIfNeeded();
});
