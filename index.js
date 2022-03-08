const circles = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progress = document.querySelector(".progress");

let cuurrentActive = 1;

next.addEventListener("click", () => {
  cuurrentActive++;
  if (cuurrentActive > circles.length) {
    cuurrentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  cuurrentActive--;
  if (cuurrentActive < 1) {
    cuurrentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < cuurrentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (cuurrentActive === 1) {
    prev.disabled = true;
  } else if (cuurrentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
