const body = document.querySelector("body");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark_mode");
}

function toggleMode() {
  body.classList.toggle("dark_mode");

  if (body.classList.contains("dark_mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// mob menu

function toggleMenu() {
  document
    .querySelector(".nav_mob_wrapper")
    .classList.toggle("nav_mob_wrapper_visible");
}

const buttons = document.querySelectorAll('.questions_filter .s_btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('s_btn_active'));
        button.classList.add('s_btn_active');
    });
});
