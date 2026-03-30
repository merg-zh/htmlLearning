const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-header-toggle]");

toggle.addEventListener("click", () => {
  header.classList.toggle("is-open");
});
