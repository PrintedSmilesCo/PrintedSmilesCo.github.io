// products.js
// Starter inventory for Printed Smiles Co
// Edit inStock true/false as you make/sell items.

window.PRODUCTS = [
{
  id: "submarine",
  name: "Submarine",
  minAge: 3,
  maxAge: 99,
  inStock: true,
  image: "images/Submarine.jpg",
  short: "This sunken wreck can be a treasure for your fish.",
  details: "3-D submarine, approximately 5 inches long, can be printed in various colors.",
  tags: ["fish tank", "aquarium", "decor"]
},
{
    id: "colorful-coral",
    name: "Aquarium Coral",
    minAge: 3,
    maxAge: 99,
    inStock: true,
    image: "images/colorful-coral.jpeg",
    short: "Colorful and fun coral for your aquarium.",
    details: "3-D coral can be printed in various colors, shapes, and sizes.",
    tags: ["fish tank", "aquarium", "decor"]
},
{
    id: "badsign",
    name: "Bad Sign",
    minAge: 3,
    maxAge: 99,
    inStock: true,
    image: "images/BadSign.jpeg",
    short: "A silly sign to brighten someone's day.",
    details: "Approximately 4.5\" x 4.5\" and can be printed in various colors.",
    tags: ["decor"]
}
];
console.log("Products loaded:", window.PRODUCTS);
