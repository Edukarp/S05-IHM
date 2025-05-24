document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  }

  const eventsList = document.getElementById("events-list");
  eventos.forEach((evento) => {
    const div = document.createElement("div");
    div.className = "event-card";
    div.innerHTML = `
      <img src="${evento.image}" alt="${evento.title}">
      <h2>${evento.title}</h2>
      <p>
        <b>Data:</b> ${evento.date} &nbsp; <b>Hora:</b> ${evento.time}
        ${evento.ac ? '<span class="badge-ac">Horas em AC</span>' : ""}
      </p>
      <p><b>Local:</b> ${evento.location}</p>
      <p>${evento.description}</p>
      ${
        evento.paid
          ? `<button class="comprar-btn">
            <i class="fa-solid fa-ticket" style="color: #ffffff"></i>
            Comprar Ingressos
             </button>`
          : ""
      }
    `;
    eventsList.appendChild(div);
  });
});

const eventos = [
  {
    id: 1,
    title: "Semana do Software 2025",
    date: "12/05",
    time: "10:00",
    location: "Salão de Eventos",
    type: "tech",
    ac: true,
    paid: false,
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
    ac: true,
    paid: true,
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
    ac: false,
    paid: true,
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
    ac: true,
    paid: false,
    description:
      "Venha conhecer empresas e projetos com destaque na área da engenharia.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    id: 5,
    title: "Jutel 2025",
    date: "12/09 a 14/09",
    time: "21:00",
    location: "Santa Rita do Sapucaí",
    type: "cultural",
    ac: false,
    paid: true,
    description:
      "Estão preparados para o maior jogos da regiao?",
    image:
      "../public/Jutel_banner.jpg",

  },
];
