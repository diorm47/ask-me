const modeToggler = document.querySelector(".mode_toggler");
const body = document.querySelector("body");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark_mode");
}

modeToggler.addEventListener("click", () => {
  body.classList.toggle("dark_mode");

  if (body.classList.contains("dark_mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
