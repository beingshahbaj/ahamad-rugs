const nvBar = document.querySelector(".navbar");
const anchors = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
        nvBar.style.backgroundColor = "white";
        nvBar.style.color = "black";
        anchors.forEach((anchor) => {
            anchor.style.color = "black!important";
        });
    } else {
        nvBar.style.backgroundColor = "";
        nvBar.style.color = "white";

        anchors.forEach((anchor) => {
            anchor.style.color = "white!important";
        });
    }
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    nvBar.style.top = "0";
  }
  if (e.deltaY > 0) {
    nvBar.style.top = "-100%";
  }
});

