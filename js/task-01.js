console.log(
  `Number of categories: ${
    document.getElementById("categories").getElementsByTagName("h2").length
  }`
);
const categoriesArray = [...document.querySelectorAll(".item")]
  .map(
    (categories) => `Categories: ${categories.children[0].textContent}
     Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
