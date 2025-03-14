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

function populateCarousel(events) {
  const carousel = document.querySelector(".carousel");

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

populateCarousel(eventos);

let currentIndex = 0;
const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/*
function updateCarousel() {
  const cardWidth = document.querySelector(".card").offsetWidth + 16; 
  carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < events.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }

});
*/
