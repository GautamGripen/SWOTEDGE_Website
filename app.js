const siteConfig = {
  whatsappNumber: "919995112919",
  whatsappMessage:
    "Hello SWOTEDGE, I would like to discuss a new event or brand experience project.",
};

const loader = document.getElementById("loader");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const whatsappCta = document.getElementById("whatsappCta");
const whatsappFloat = document.getElementById("whatsappFloat");

function buildWhatsAppUrl() {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return `${base}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}

function hydrateWhatsAppLinks() {
  const url = buildWhatsAppUrl();
  [whatsappCta, whatsappFloat].forEach((link) => {
    if (link) {
      link.href = url;
    }
  });
}

function setupLoader() {
  const dismiss = () => {
    window.setTimeout(() => {
      loader?.classList.add("is-hidden");
    }, 2200);
  };

  if (document.readyState === "complete") {
    dismiss();
  } else {
    window.addEventListener("load", dismiss, { once: true });
  }
}

function setupNav() {
  if (!menuToggle || !siteNav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  elements.forEach((element) => observer.observe(element));
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
}

hydrateWhatsAppLinks();
setupLoader();
setupNav();
setupRevealAnimations();
registerServiceWorker();
