document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("selectedTheme");

  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  }
});

function toggleCard() {
  const card = document.getElementById("theme-card");
  if (card.style.display === "none" || card.style.display === "") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
}

function setTheme(theme) {
  const html = document.documentElement;
  html.classList.remove("classic-theme", "pink-theme");
  html.classList.add(theme);

  localStorage.setItem("selectedTheme", theme);
  toggleCard();
}
