const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const caseButton = document.querySelector(".project-link");
const caseDetails = document.querySelector("#case-details");
const copyButton = document.querySelector("[data-copy-message]");
const copyFeedback = document.querySelector(".copy-feedback");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  navigation.classList.toggle("open", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("open");
    document.body.style.overflow = "";
  });
});

caseButton.addEventListener("click", () => {
  const isExpanded = caseButton.getAttribute("aria-expanded") === "true";
  caseButton.setAttribute("aria-expanded", String(!isExpanded));
  caseDetails.hidden = isExpanded;
  caseButton.firstChild.textContent = isExpanded
    ? "Ver estudo de caso "
    : "Fechar estudo de caso ";

  if (!isExpanded) {
    caseDetails.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

copyButton.addEventListener("click", async () => {
  const message =
    "Olá, Nicole! Conheci seu portfólio e gostaria de conversar sobre uma oportunidade.";

  try {
    await navigator.clipboard.writeText(message);
    copyFeedback.textContent = "Mensagem copiada. Agora é só colar onde preferir.";
  } catch {
    copyFeedback.textContent = message;
  }
});

document.querySelector("[data-current-year]").textContent =
  new Date().getFullYear();
