const totalCategoriesItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategoriesItem.length}`);

const categoriesArray = [...totalCategoriesItem]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  ).join("\n");
  
console.log(categoriesArray);