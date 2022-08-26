const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.getElementById("ingredients");

function createElement(ingredients) {
  let itemsArr = [];
  ingredients.forEach((ingredient) => {
    const liItem = document.createElement("li");
    liItem.textContent = ingredient;
    itemsArr.push(liItem);
  });
  return ulList.prepend(...itemsArr);
}

createElement(ingredients);
