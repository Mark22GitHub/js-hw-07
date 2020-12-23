// Задание 5

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector('#name-input');
const span = document.querySelector("#name-output");

input.addEventListener('input', () => {
    span.textContent = input.value;

    if (input.value === '') {
        span.textContent = 'незнакомец';
    }
})
