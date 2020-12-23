// Задание 2
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUl = document.querySelector('#ingredients')

ingredients.forEach(elem => {
    const li = document.createElement('li');
    li.textContent = elem;
    ingredientsUl.append(li);
})

