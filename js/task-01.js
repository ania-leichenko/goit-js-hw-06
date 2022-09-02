console.log(
  `Number of categories: ${
    document.getElementById("categories").getElementsByTagName("h2").length
  }`
);
const categoriesArray = document.querySelectorAll(".item");
categoriesArray.forEach((categories) => {
  console.log(`Category: ${categories.firstElementChild.textContent}`);
  console.log(`Elements: ${categories.lastElementChild.children.length}`);
});