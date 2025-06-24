// Simplified functionality for basic page interactions
class BasicPageInteractions {
  constructor() {
    this.init();
    this.initSlider();
  }

  init() {
    this.bindEvents();
    this.handleScroll();
    this.handleFormSubmission();
    window.addEventListener("scroll", () => this.handleScroll());
  }

  bindEvents() {
    // Handle navbar scroll effect
    this.handleNavbarScroll();

    // Navigation menu clicks
    const navLinksList = document.querySelectorAll(".nav-links a");
    navLinksList.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Play button functionality
    const playButton = document.querySelector(".play-button");
    if (playButton) {
      playButton.addEventListener("click", () => {
        this.handlePlayButtonClick();
      });
    }

    // News item interactions
    const newsItems = document.querySelectorAll(".news-item");
    newsItems.forEach((item) => {
      item.addEventListener("click", () => {
        this.handleNewsItemClick(item);
      });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        this.handleNewsletterSubmission(e);
      });
    }

    // Mobile Navbar Toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
      // Optional: close menu when a link is clicked
      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
        });
      });
    }
  }

  handlePlayButtonClick() {
    // Add play button animation
    const playButton = document.querySelector(".play-button");
    playButton.style.transform = "scale(0.95)";

    setTimeout(() => {
      playButton.style.transform = "scale(1)";
    }, 150);

    // You can add video play functionality here
    console.log("Play button clicked - add video modal or play functionality");
  }

  handleNewsItemClick(item) {
    // Add click animation
    item.style.transform = "translateX(10px)";

    setTimeout(() => {
      item.style.transform = "translateX(0)";
    }, 200);

    // You can add navigation to news article here
    console.log("News item clicked:", item.querySelector("p").textContent);
  }

  handleNewsletterSubmission(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      language: formData.get("language"),
    };

    // Add loading state to button
    const submitButton = e.target.querySelector(".subscribe-button");
    const originalText = submitButton.textContent;
    submitButton.textContent = "SUBSCRIBING...";
    submitButton.disabled = true;

    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
      console.log("Newsletter subscription data:", data);

      // Show success message
      submitButton.textContent = "SUBSCRIBED!";
      submitButton.style.background = "#28a745";

      // Reset form after success
      setTimeout(() => {
        e.target.reset();
        submitButton.textContent = originalText;
        submitButton.style.background = "#D94535";
        submitButton.disabled = false;

        // Reset language selection to English
        const englishRadio = e.target.querySelector('input[value="english"]');
        if (englishRadio) {
          englishRadio.checked = true;
        }
      }, 2000);
    }, 1000);
  }

  handleNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    const topbar = document.querySelector(".topbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
        if (topbar) {
          topbar.classList.add("hide");
        }
      } else {
        navbar.classList.remove("scrolled");
        if (topbar) {
          topbar.classList.remove("hide");
        }
      }
    });
  }

  handleScroll() {
    const scrollY = window.scrollY;
    const topbar = document.querySelector(".topbar");
    const navbar = document.querySelector(".navbar");

    // Hide/show topbar
    if (scrollY > 100) {
      topbar.classList.add("hide");
      navbar.classList.add("scrolled");
    } else {
      topbar.classList.remove("hide");
      navbar.classList.remove("scrolled");
    }
  }

  handleFormSubmission() {
    const form = document.querySelector(".newsletter-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitButton = form.querySelector(".subscribe-button");
      const originalText = submitButton.textContent;

      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Basic validation
      const requiredFields = ["firstName", "lastName", "email", "consent"];
      const isValid = requiredFields.every((field) => {
        if (field === "consent") {
          return document.querySelector(`input[name="${field}"]`).checked;
        }
        return data[field] && data[field].trim() !== "";
      });

      if (!isValid) {
        alert("Please fill in all required fields and accept the consent.");
        return;
      }

      // Show loading state
      submitButton.textContent = "SUBSCRIBING...";
      submitButton.style.background = "#D94535";
      submitButton.disabled = true;

      // Simulate API call
      setTimeout(() => {
        alert("Thank you for subscribing to our newsletter!");
        e.target.reset();
        submitButton.textContent = originalText;
        submitButton.style.background = "#D94535";
        submitButton.disabled = false;
      }, 2000);
    });
  }

  // Slider functionality
  initSlider() {
    // Slider data with real Apollo images
    this.slidesData = [
      {
        imageSrc:
          "https://www.apollo.com/content/dam/apolloaem/images/insights/2025/torsten-slok-bloomberg-profile.png",
        label: "BLOOMBERG MARKETS",
        headline: "Torsten Slok Doesn't Follow the Crowd, He Follows the Data",
        description:
          "Apollo Chief Economist Torsten Slok is writing a story about tomorrow, one daily email at a time.",
        profileLink: "#",
      },
      {
        imageSrc:
          "https://www.apollo.com/content/dam/apolloaem/images/insights/2025/chris-edson-pi-3.png",
        label: "APOLLO INSIGHTS",
        headline: "Chris Edson on Portfolio Innovation and Strategic Growth",
        description:
          "Leading insights on portfolio management and strategic investment approaches in today's evolving market landscape.",
        profileLink: "#",
      },
      {
        imageSrc:
          "https://www.apollo.com/content/dam/apolloaem/images/insights/2024/thinkitnewfrog.png",
        label: "INNOVATION SERIES",
        headline: "Think It New: Transforming Ideas into Market Opportunities",
        description:
          "Exploring how innovative thinking drives successful investment strategies and creates lasting value.",
        profileLink: "#",
      },
      {
        imageSrc:
          "https://www.apollo.com/content/dam/apolloaem/images/brand/apo-grey-background-16x9.png",
        label: "APOLLO GLOBAL",
        headline: "Building the Future of Alternative Investment Management",
        description:
          "Apollo's commitment to delivering exceptional outcomes through strategic partnerships and innovative solutions.",
        profileLink: "#",
      },
      {
        imageSrc:
          "https://www.apollo.com/content/dam/apolloaem/images/insights/2025/torsten-slok-bloomberg-profile.png",
        label: "MARKET INSIGHTS",
        headline: "Data-Driven Decision Making in Modern Finance",
        description:
          "How leading economists and analysts are using advanced data analytics to shape investment strategies.",
        profileLink: "#",
      },
    ];

    this.currentSlide = 0;
    this.setupSliderControls();
  }

  setupSliderControls() {
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");

    if (!prevButton || !nextButton) return;

    prevButton.addEventListener("click", () => this.previousSlide());
    nextButton.addEventListener("click", () => this.nextSlide());
  }

  previousSlide() {
    this.currentSlide =
      this.currentSlide === 0
        ? this.slidesData.length - 1
        : this.currentSlide - 1;
    this.updateSlide();
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.slidesData.length - 1
        ? 0
        : this.currentSlide + 1;
    this.updateSlide();
  }

  updateSlide() {
    const slide = this.slidesData[this.currentSlide];

    // Get elements
    const image = document.getElementById("slide-image");
    const label = document.getElementById("slide-label");
    const headline = document.getElementById("slide-headline");
    const description = document.getElementById("slide-description");
    const counter = document.getElementById("slide-counter");
    const cardContent = document.querySelector(".card-content");
    const cardImage = document.querySelector(".card-image");

    if (!image || !label || !headline || !description || !counter) return;

    // Fade out
    cardContent.style.opacity = "0";
    cardImage.style.opacity = "0";

    setTimeout(() => {
      // Update content
      image.src = slide.imageSrc;
      image.alt = slide.headline;
      label.textContent = slide.label;
      headline.textContent = slide.headline;
      description.textContent = slide.description;
      counter.textContent = `${this.currentSlide + 1} / ${
        this.slidesData.length
      }`;

      // Fade in
      cardContent.style.opacity = "1";
      cardImage.style.opacity = "1";
    }, 250);
  }
}

// Animation effects
class AnimationController {
  constructor() {
    this.init();
  }

  init() {
    this.addHoverEffects();
    this.addLoadAnimations();
  }

  addHoverEffects() {
    // Add hover effects to cards
    const cards = document.querySelectorAll(
      ".news-item, .social-link, .contact-link"
    );
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        if (card.classList.contains("news-item")) {
          card.style.transform = "translateX(5px)";
        }
      });

      card.addEventListener("mouseleave", () => {
        if (card.classList.contains("news-item")) {
          card.style.transform = "translateX(0)";
        }
      });
    });
  }

  addLoadAnimations() {
    // Add loading animations
    const hero = document.querySelector(".hero-text");
    if (hero) {
      setTimeout(() => {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
      }, 500);
    }
  }
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const interactions = new BasicPageInteractions();
  const animations = new AnimationController();

  // Add initial loading state
  document.body.style.overflow = "hidden";

  // Remove loading state after everything is ready
  setTimeout(() => {
    document.body.style.overflow = "auto";
    document.body.classList.add("loaded");
  }, 100);

  // Smooth scroll to top for footer back-to-top button
  const backToTop = document.getElementById("footer-backtotop");
  if (backToTop) {
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      // Custom smooth scroll function
      const duration = 800; // Duration in milliseconds
      const start = window.pageYOffset;
      const startTime =
        "now" in window.performance ? performance.now() : new Date().getTime();

      function scroll() {
        const currentTime =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function for smoother animation
        const easeInOutQuad = (t) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        window.scrollTo(0, start * (1 - easeInOutQuad(progress)));

        if (timeElapsed < duration) {
          requestAnimationFrame(scroll);
        }
      }

      requestAnimationFrame(scroll);
    });
  }
});

// Handle window resize
window.addEventListener(
  "resize",
  debounce(() => {
    // Any resize handling if needed
  }, 250)
);
