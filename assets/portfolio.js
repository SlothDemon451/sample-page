// Portfolio items data
const portfolioItems = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "19 MAY 2025",
    title: "CVC Credit Perspectives – Q1 2025",
    link: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "20 FEB 2025",
    title: "CVC DIF on uncovering hidden potential",
    link: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "10 FEB 2025",
    title:
      "CVC Credit Perspectives – Attractive opportunities across global credit –",
    link: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "02 DEC 2024",
    title: "Keynote Interview: Building from the ground up",
    link: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "01 NOV 2024",
    title:
      "CVC Credit Perspectives – Attractive opportunities across global credit –",
    link: "#",
  },
  // Add more items for Load More functionality
  {
    imageUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "15 OCT 2024",
    title: "Emerging Markets: New Frontiers in Credit",
    link: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "10 SEP 2024",
    title: "Private Credit: Navigating Volatility",
    link: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "25 AUG 2024",
    title: "Credit Perspectives – The Next Decade",
    link: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "12 JUL 2024",
    title: "Global Credit: Opportunities and Risks",
    link: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "01 JUN 2024",
    title: "Credit Market Outlook 2024",
    link: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "15 MAY 2024",
    title: "CVC DIF: Unlocking Value in Private Credit",
    link: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    tag: "INSIGHT",
    date: "10 APR 2024",
    title: "Credit Perspectives – Q2 2024",
    link: "#",
  },
];

const BATCH_SIZE = 5;
let loadedBatches = 1;
const totalBatches = Math.ceil(portfolioItems.length / BATCH_SIZE);

const grid = document.getElementById("portfolioGrid");
const loadMoreBtn = document.getElementById("portfolioLoadMore");
const pagination = document.getElementById("portfolioPagination");

function renderPortfolioItems(batch) {
  // Remove all children if batch === 1 (first load)
  if (batch === 1) grid.innerHTML = "";
  const start = (batch - 1) * BATCH_SIZE;
  const end = Math.min(batch * BATCH_SIZE, portfolioItems.length);
  for (let i = start; i < end; i++) {
    const item = portfolioItems[i];
    // Masonry: first batch, first two are wide, next three are narrow
    let cardClass = "portfolio-card";
    if (batch === 1) {
      if (i === 0 || i === 1) cardClass += " wide";
      else cardClass += " narrow";
    } else {
      cardClass += " narrow";
    }
    const card = document.createElement("article");
    card.className = cardClass;
    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.title}" class="portfolio-image" />
      <div class="portfolio-content">
        <div class="portfolio-meta">
          <span class="portfolio-tag">${item.tag}</span>
          <span class="portfolio-date">${item.date}</span>
        </div>
        <h4 class="portfolio-title">${item.title}</h4>
        <a href="${item.link}" class="portfolio-link">Learn More <span class="arrow">→</span></a>
      </div>
    `;
    grid.appendChild(card);
  }
}

function renderPagination() {
  pagination.innerHTML = "";
  for (let i = 1; i <= totalBatches; i++) {
    const dot = document.createElement("span");
    dot.className = "portfolio-dot" + (i === loadedBatches ? " active" : "");
    dot.textContent = i === loadedBatches ? "●" : "•";
    pagination.appendChild(dot);
  }
}

function handleLoadMore() {
  loadedBatches++;
  renderPortfolioItems(loadedBatches);
  renderPagination();
  if (loadedBatches === totalBatches) {
    loadMoreBtn.disabled = true;
  }
}

// Initial render
renderPortfolioItems(1);
renderPagination();

loadMoreBtn.addEventListener("click", handleLoadMore);
