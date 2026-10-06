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

const projects = [
  {
    title: "Portfolio",
    description:
      "Byggt en sida som presenterar mig själv, mina projekt och mitt arbete med frontend och UX. Portfolion är fortfarande under bygge och finns inte tillgänglig ännu",
  },
  {
    title: "3 Driftsatta hemsidor",
    description:
      "På min LIA fick jag uppgiften att planera, bygga och driftsätta tre hemsidor för ett väletablerat och marknadsledande företag. Jag känner stor ansvar för mitt arbete och jobbar än idag med att förbättra det.",
  },
  {
    title: "Tech stack",
    description:
      "Next.js, React, React native, SSMS, Vercel, Figma, Google AI Studio, Git, Node.js, VS Code, Github, MySQL, JavaScript, HTML och CSS",
  },
];

const aboutMeParagraphs = [
  "Jag studerar för nuvarande på Chas Academy till UX-Engineer. I ryggsäcken har jag en tvåårig utbildning av frontendutveckling.",
  "Intresset för UI och UX växte stort hos mig när jag på min LIA fick designa och bygga 3 helt egna hemsidor åt företaget.",
  'Jag har utvecklat mycket inom området de senaste året och jobbar än idag gratis vid sidan om studierna på mitt lia-företag för att förbättra UI och kod. Målet är alltid att skapa en "Nice!" känsla hos användarna, och lämna ett arbete som jag känner mig stolt och kan ta ansvar för.',
  "Min största svaghet är hundar!",
];

const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const strengthCards = document.querySelector("#strength-cards");
const projectList = document.querySelector("#project-list");
const aboutTextList = document.querySelector("#about-list");

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

strengths.forEach((strength) => {
  const card = document.createElement("li");
  const title = document.createElement("h3");
  const description = document.createElement("p");

  card.classList.add("strength-card");
  title.textContent = strength.title;
  description.textContent = strength.description;

  card.append(title, description);
  strengthCards.append(card);
});

projects.forEach((project) => {
  const listItem = document.createElement("li");
  const title = document.createElement("h3");
  const description = document.createElement("p");

  title.textContent = project.title;
  description.textContent = project.description;

  listItem.append(title, description);
  projectList.append(listItem);
});

aboutMeParagraphs.forEach((text) => {
  const listItem = document.createElement("li");
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  listItem.appendChild(paragraph);
  aboutTextList.appendChild(listItem);
});
