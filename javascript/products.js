const products = [
  {
    name: "Antique Clock",
    description: "Carefully crafted piece of art accentuated with nature.",
    price: "$120",
    rating: 4,
    image: "Wooden Clock.jpeg",
  },
  {
    name: "Lamp",
    description: "Minimalist lamp to brighten your space.",
    price: "$32",
    rating: 5,
    image: "Lamp 1.jpeg",
  },
  {
    name: "Mirror",
    description: "Elegant mirror with a timeless touch.",
    price: "$28",
    rating: 4,
    image: "Mirror.jpeg",
  },
  {
    name: "Coffee table",
    description: "Modern table.",
    price: "$30",
    rating: 4,
    image: "Center table.jpeg",
  },
  {
    name: "Comfort seat",
    description: "Maximum relaxation.",
    price: "$28",
    rating: 4.5,
    image: "Comfort.jpeg",
  },
  {
    name: "Lux office",
    description: "Made to last.",
    price: "$125",
    rating: 5,
    image: "Lux office.jpeg",
  },
  {
    name: "Office and Study",
    description: "Work from home.",
    price: "$28",
    rating: 4,
    image: "Office and Study Desk.jpeg",
  },
  {
    name: "Woven craft",
    description: "Memories at the best posture.",
    price: "$40",
    rating: 5,
    image: "Relax.jpeg",
  },
  {
    name: "Side table",
    description: "Irregular design.",
    price: "$25",
    rating: 4.7,
    image: "Side table.jpeg",
  },
  {
    name: "White Cupboard",
    description: "Trusted Storage.",
    price: "$62",
    rating: 4,
    image: "White Cupboard.jpeg",
  },
  {
    name: "Unique Modern Reception Desk",
    description: "Deluxe furniture",
    price: "$155",
    rating: 4,
    image: "Unique Modern Reception Desk.jpeg",
  },
  {
    name: "Plant Pot",
    description: "Interior Garden.",
    price: "$38",
    rating: 4,
    image: "Plant pot.jpeg",
  },
  // Add more products here
];

function renderProducts(filter = "All") {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const filtered =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="imgs/${product.image}" alt="${
      product.name
    }" class="product-img"/>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span class="price">${product.price}</span>
      <div class="stars">
        ${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}
      </div>
    `;
    grid.appendChild(card);
  });
}

// Initial render
renderProducts();
