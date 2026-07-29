const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const caseButton = document.querySelector(".project-link");
const caseDetails = document.querySelector("#case-details");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  navigation.classList.toggle("open", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    navigation.classList.remove("open");
    document.body.style.overflow = "";
  });
});

caseButton.addEventListener("click", () => {
  const isExpanded = caseButton.getAttribute("aria-expanded") === "true";
  caseButton.setAttribute("aria-expanded", String(!isExpanded));
  caseDetails.hidden = isExpanded;
  caseButton.firstChild.textContent = isExpanded
    ? "View case study "
    : "Close case study ";

  if (!isExpanded) {
    caseDetails.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

document.querySelector("[data-current-year]").textContent =
  new Date().getFullYear();
