const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const totalIngredientsEl = document.querySelector("#ingredients");

const listIngredients = ingredients.forEach(ingredient => {
  const itemListEl = document.createElement("li");
 
  itemListEl.textContent = ingredient;
  itemListEl.classList.add("item");
  totalIngredientsEl.appendChild(itemListEl)

});

console.log(totalIngredientsEl);
