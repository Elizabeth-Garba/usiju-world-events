document.documentElement.classList.add("js-ready");

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

function setMenuOpen(isOpen) {
  if (!menuToggle || !siteNav) return;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  siteNav.classList.toggle("is-open", isOpen);
}

menuToggle?.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const filterButtons = document.querySelectorAll(".filter-button");
const galleryTiles = document.querySelectorAll(".gallery-tile");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("is-active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });
    galleryTiles.forEach((tile) => {
      tile.hidden = selectedFilter !== "all" && tile.dataset.category !== selectedFilter;
    });
  });
});

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector(".lightbox-caption");
const closeLightbox = () => lightbox?.close();

galleryTiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = tile.dataset.full;
    lightboxImage.alt = tile.dataset.alt || "Usiju World Events gallery image";
    if (lightboxCaption) lightboxCaption.textContent = lightboxImage.alt;
    lightbox.showModal();
  });
});

lightbox?.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

const enquiryForm = document.querySelector("#enquiry-form");
const formStatus = document.querySelector("#form-status");
enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!formStatus) return;

  formStatus.classList.remove("is-error", "is-success");
  if (!enquiryForm.reportValidity()) {
    formStatus.textContent = "Please complete the required fields with valid details.";
    formStatus.classList.add("is-error");
    return;
  }

  formStatus.textContent = "Your details are valid, but this preview cannot send the enquiry. No information has been sent.";
  formStatus.classList.add("is-error");
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
