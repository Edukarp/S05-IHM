document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("selectedTheme");

  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  }
});

const eventos = [
  {
    id: 1,
    title: "Semana do Software 2025",
    date: "12/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "tech",
    description:
      "Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 2,
    title: "Workshop de IoT",
    date: "12/01",
    time: "08:00",
    location: "Laboratório CS&I",
    type: "tech",
    description:
      "Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 3,
    title: "Festa dos Alunos 2025",
    date: "18/05",
    time: "19:00",
    location: "Área Esportiva do Inatel",
    type: "cultural",
    description:
      "Venha comemorar a melhor Festa dos Alunos de todos os tempos!",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 4,
    title: "Feira de Oportunidades",
    date: "04/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "academic",
    description:
      "Venha conhecer empresas e projetos com destaque na área da engenharia.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400",
  },
];

function goToEvents() {
  window.location.href = "eventos/index.html";
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

function toggleThemes() {
  const themes = document.getElementById("themes-options");
  themes.classList.toggle("show");
}

function setTheme(theme) {
  document.documentElement.classList.remove("classic-theme", "pink-theme");
  document.documentElement.classList.add(theme);
  localStorage.setItem("selectedTheme", theme);
}

const carousel = document.querySelector(".carousel");

function populateCarousel(events) {
  events.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
          <img src="${event.image}" alt="${event.title}">
          <div class="info">
              <h3>${event.title}</h3>
              <p>${event.description}</p>
              <div class="icon">
              <i class="fa-solid fa-calendar-days" style="color: #ffffff;"></i>
              <p> ${event.date} às ${event.time} </p>
              <i class="fa-solid fa-location-dot" style="color: #ffffff; padding-left:12px"></i>
              <p>${event.location}</p>
              </div>
          </div>
      `;

    carousel.appendChild(card);
  });
}

let index = 0;
function nextCard() {
  index = (index + 1) % eventos.length;
  updateCarousel();
}

function prevCard() {
  index = (index - 1 + eventos.length) % eventos.length;
  updateCarousel();
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById("nextBtn").addEventListener("click", nextCard);
document.getElementById("prevBtn").addEventListener("click", prevCard);

let startX;
carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
carousel.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextCard();
  if (endX - startX > 50) prevCard();
});

let autoSlideInterval;

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextCard();
  }, 5000);
  carousel.classList.remove("paused");
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  carousel.classList.add("paused");
}

carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();

populateCarousel(eventos);
