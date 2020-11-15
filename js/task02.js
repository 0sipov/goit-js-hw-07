// Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, после чего вставит все li
// за одну операцию в список ul.ingredients.Для создания DOM -
// узлов используй document.createElement().

const dish = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientsList = (ingredients) => {
    const ingredientsList = document.getElementById("ingredients");
    const items = ingredients.map(element => {
        const item = document.createElement("li");
        item.textContent = element;
      return item;
    })
  console.log(typeof items)
    ingredientsList.append(...items);
}

createIngredientsList(dish);
