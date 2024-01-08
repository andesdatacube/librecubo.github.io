const slider = document.getElementById("slider");
const foregroundImg = document.querySelector(".foreground-img");
const sliderButton = document.querySelector(".slider-button");

slider.addEventListener("input", function () {
  foregroundImg.style.width = `${this.value}%`;
  sliderButton.style.left = `calc(${this.value}% - 15px)`;
});
