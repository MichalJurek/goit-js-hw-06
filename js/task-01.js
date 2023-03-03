const items = document.querySelectorAll(".item");
console.log("Number of categories: ", items.length);

items.forEach(item => {
  const categoryTitle = item.querySelector(".item h2");
  console.log("Category:", categoryTitle.textContent)
  const elementsCount = item.querySelectorAll("li")
  console.log("Elements:", elementsCount.length)
});