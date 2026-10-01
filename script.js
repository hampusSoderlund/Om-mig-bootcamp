const strengths = [
  {
    title: "Kommunikation",
    description:
      "Jag är god kommunikatör som fungerar bra i alla sammanhang. Kan enkelt formulera mina tankar och ideer och se till att de landar rätt hos mottagaren.",
  },
  {
    title: "Problemlösning",
    description:
      "Jag bryter ner utmaningar i mindre delar och hittar praktiska lösningar. Jag nöjer mig inte med första bästa lösning utan lägger gärna extra tid på att förbättra och komma med fler ideer",
  },
  {
    title: "Samarbete",
    description:
      "Jag arbetar väl i grupp och gillar att dela kunskap och hjälpa andra framåt. Fungerar bra som ledare men även den som lyssnar och gör!",
  },
  {
    title: "Fokus",
    description:
      "Jag håller struktur, prioriterar rätt saker och gör arbete som är genomtänkt. ",
  },
];

const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const strengthCards = document.querySelector("#strength-cards");

function updateThemeToggle() {
  if (!themeToggle) {
    return;
  }

  const isLight = root.classList.contains("theme-light");
  themeToggle.setAttribute("aria-checked", String(isLight));
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Byt till mörkt tema" : "Byt till ljust tema",
  );
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.classList.add("theme-light");
}

if (themeToggle) {
  updateThemeToggle();

  themeToggle.addEventListener("click", () => {
    const isLight = root.classList.toggle("theme-light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    updateThemeToggle();
  });
}

if (strengthCards) {
  strengths.forEach((strength) => {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    card.classList.add("strength-card");
    title.textContent = strength.title;
    description.textContent = strength.description;

    card.append(title, description);
    strengthCards.append(card);
  });
}
