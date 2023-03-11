//----------DATA----------//

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
//----------CREATE----------//
//zgodnie z konspektem, do pracy z tablicamy korzystam z map aby wykonać akcję z każdym z elementów// 
const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
// w jednej operacji//
list.innerHTML = markup;
