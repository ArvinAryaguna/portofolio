document.documentElement.classList.add("js");

const projects = [
  {
    title: "Sentiment Analysis of Indonesian E-Commerce Reviews",
    period: "Mar 2022 – Mar 2023 · Bina Nusantara University",
    description: "Built a sentiment classifier for Indonesian product reviews. Cleaned and analyzed the review texts with pandas and NLTK, then trained and evaluated a Decision Tree model.",
    result: "90.15% accuracy on 77,000+ reviews",
    tags: ["Python", "pandas", "NLTK", "Decision Tree"],
    link: "https://colab.research.google.com/drive/1l58TnTQG6iLhnzEjTGqB4TeCO99yPA0Z?usp=sharing"
  },
  {
    title: "Public Sentiment on Indonesian Education Policies",
    period: "Sep – Oct 2024 · Business Intelligence and Analytics",
    description: "Led an end-to-end project following CRISP-DM to understand public opinion of education policies. Collected, cleaned, and analyzed posts from X, and documented the findings in an academic report.",
    result: "76.58% accuracy on 10,000+ X posts",
    tags: ["CRISP-DM", "tweet-harvest", "pandas", "IndoBERT tokenizer", "Naïve Bayes"],
    link: "https://colab.research.google.com/drive/12YlESQcXiCwVCKkSA5ZWPgBRevU6NWkY?usp=sharing"
  }
];

// Render project cards
const list = document.getElementById("projectList");
list.innerHTML = projects.map(p => `
  <article class="card">
    <span class="period">${p.period}</span>
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <p class="result">${p.result}</p>
    <ul class="chips">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
    <a class="btn ghost" href="${p.link}" target="_blank" rel="noopener">View Project Files</a>
  </article>
`).join("");

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Fade-in on scroll
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Highlight the nav link of the section on screen
const navAnchors = [...navLinks.querySelectorAll("a")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => sectionObserver.observe(s));
