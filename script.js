const filters = document.querySelector("#filters");
filters.addEventListener("input", filter);

function filter() {
  const ram = [...filters.querySelectorAll("#ram input:checked")].map(
    (n) => n.value
  );

  productList(DATA.filter((n) => !ram.length || ram.includes(n.ram)));
}

function productList(cards) {
  document.getElementById("cards").innerHTML = cards
    .map(
      (product) => `  <div class="card">
                                                    <div class="brand">${product.brand}</div>
                                                    <div class="brandName">${product.name}</div>
                                                    <div class="brandRam">${product.ram}</div>
                                                    </div>`
    )
    .join("");
}

const DATA = [
  {
    brand: "Redmi",
    name: "Redmi note 9 pro",
    price: 30000,
    camera: "13MP",
    storage: "128GB",
    ram: "6GB",
    color: {
      code: "#000",
      name: "black",
    },
    image: "redmi.png",
  },
  {
    brand: "Oppo",
    name: "Oppo k 10 5G",
    price: 40000,
    camera: "48MP",
    storage: "128GB",
    ram: "8GB",
    color: {
      code: "#000",
      name: "black",
    },
    image: "oppo_k10.webp",
  },
  {
    brand: "Samsung",
    name: "Samsung Galaxy F12",
    price: 12000,
    camera: "48MP",
    storage: "64GB",
    ram: "4GB",
    color: {
      code: "#000",
      name: "black",
    },
    image: "samsung_galaxy.webp",
  },
  {
    brand: "Nokia",
    name: "Nokia C01 PLUS 4G",
    price: 7000,
    camera: "48MP",
    storage: "16GB",
    ram: "2GB",
    color: {
      code: "#808080",
      name: "gray",
    },
    image: "nokiac01.jpg",
  },
  {
    brand: "Apple",
    name: "Apple iphone11",
    price: 73000,
    camera: "48MP",
    storage: "128GB",
    ram: "8GB",
    color: {
      code: "#a020f0",
      name: "purple",
    },
    image: "apple_iphone11.jpg",
  },
  {
    brand: "Apple",
    name: "iphone 13",
    price: 105000,
    camera: "48MP",
    storage: "512GB",
    ram: "16GB",
    color: {
      code: "#ff0000",
      name: "red",
    },
    image: "iphone13.webp",
  },

  {
    brand: "Realme",
    name: "realme narzo 50i",
    price: 16000,
    camera: "8MP",
    storage: "64GB",
    ram: "4GB",
    color: {
      code: "#545351",
      name: "carbon black",
    },
    image: "realme-narzo-50i.webp",
  },
  {
    brand: "Redmi",
    name: "Redmi note 10s ",
    price: 9000,
    camera: "13MP",
    storage: "64GB",
    ram: "4GB",
    color: {
      code: "#256794",
      name: "deep see blue",
    },
    image: "redme-note-10s.webp",
  },
  {
    brand: "Samsung",
    name: "samsung galaxy f22",
    price: 14000,
    camera: "13MP",
    storage: "128GB",
    ram: "6GB",
    color: {
      code: "#191c27",
      name: "denim black",
    },
    image: "samsung-galaxy-f22.webp",
  },
  {
    brand: "Motorola",
    name: "Motorola e40",
    price: 10000,
    camera: "8MP",
    storage: "64GB",
    ram: "4GB",
    color: {
      code: "#545351",
      name: "carbon black",
    },
    image: "motoe40.webp",
  },
  {
    brand: "Poco",
    name: "Poco c31",
    price: 10000,
    camera: "5MP",
    storage: "64GB",
    ram: "4GB",
    color: {
      code: "#4169e1",
      name: "royal blue",
    },
    image: "pocoC31.webp",
  },
  {
    brand: "Asus",
    name: "Asus Rog 5s",
    price: 58000,
    camera: "24MP",
    storage: "256GB",
    ram: "12GB",
    color: {
      code: "#2d3134",
      name: "phantom black",
    },
    image: "asus-rog.webp",
  },
  {
    brand: "Asus",
    name: "Asus 8z",
    price: 43000,
    camera: "12MP",
    storage: "128GB",
    ram: "8GB",
    color: {
      code: "#c0c0c0",
      name: "silver",
    },
    image: "asus-8z.webp",
  },
  {
    brand: "Infinix",
    name: "Infinix hot 12 play",
    price: 8700,
    camera: "8MP",
    storage: "64GB",
    ram: "4GB",
    color: {
      code: "#394823",
      name: "daylight green",
    },
    image: "infinix-hot12.webp",
  },
  {
    brand: "Infinix",
    name: "Infinix note 12",
    price: 12000,
    camera: "16MP",
    storage: "64GB",
    ram: "4GB",
    color: {
      code: "#000",
      name: "force black",
    },
    image: "infinix-note12.webp",
  },
  {
    brand: "Infinix",
    name: "Infinix note 11",
    price: 30000,
    camera: "16MP",
    storage: "64GB",
    ram: "4GB",
    color: {
      code: "#27292b",
      name: "graphite black",
    },
    image: "infinix-note11.webp",
  },
  {
    brand: "Oneplus",
    name: "oneplus nord ce2 lite 5G",
    price: 20000,
    camera: "64MP",
    storage: "128GB",
    ram: "6GB",
    color: {
      code: "#696f70",
      name: "black dusk",
    },
    image: "oneplus-nord-ce2.webp",
  },
  {
    brand: "Oneplus",
    name: "oneplus 10R 5G",
    price: 43000,
    camera: "50MP",
    storage: "256GB",
    ram: "12GB",
    color: {
      code: "#228b22",
      name: "forest green",
    },
    image: "oneplus-10r-5g.webp",
  },
  {
    brand: "Oneplus",
    name: "oneplus 9pro 5G",
    price: 54000,
    camera: "48MP",
    storage: "256GB",
    ram: "12GB",
    color: {
      code: "#01796f",
      name: "pine green",
    },
    image: "oneplus-9-pro-5g.webp",
  },
];

productList(DATA);
