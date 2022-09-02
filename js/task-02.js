const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.getElementById("ingredients");

const itemsArr = ingredients.map((ingredient) => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  return liItem;
});
ulList.append(...itemsArr);
