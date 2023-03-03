//----------DATA----------//

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//----------CREATE----------//
const list = document.querySelector("#ingredients");
const liElements = document.createElement("li");
liElements.className = "item";
list.append(ingredients);
