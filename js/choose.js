function selectSize(button) {
    var buttons = document.querySelectorAll('.size-button');
  
    // Удаление класса 'selected' у всех кнопок
    buttons.forEach(function(btn) {
      btn.classList.remove('selected');
    });
  
    // Добавление класса 'selected' к выбранной кнопке
    button.classList.add('selected');
  }


//  let counter = 0;
  
// const counterValue = document.getElementById('counter-value');
// const incrementBtn = document.getElementById('increment-btn');
// const decrementBtn = document.getElementById('decrement-btn');
// const resetBtn = document.querySelector('#reset');
  
// if(counterValue.value == 0){
//     decrementBtn.disabled = true;
// }
// else{
//     decrementBtn.disabled = false;
// }

// // To increment the value of counter
// incrementBtn.addEventListener('click', () => {
//     counter++;
//     counterValue.innerHTML = counter;
// });
  
// // To decrement the value of counter
// decrementBtn.addEventListener('click', () => {
//     counter--;
//     counterValue.innerHTML = counter;
// });

// // Получаем ссылки на элементы кнопки и поля ввода количества
// var decreaseButton = document.getElementById('decrement-btn');
// var increaseButton = document.getElementById('increment-btn');
// var quantityInput = document.getElementById('counter-value');

// // Добавляем обработчики событий для кнопок увеличения и уменьшения количества
// decreaseButton.addEventListener('click', decreaseQuantity);
// increaseButton.addEventListener('click', increaseQuantity);

// // Функция для уменьшения количества
// function decreaseQuantity() {
//   var currentValue = parseInt(quantityInput.value);
//   if (currentValue > 0) {
//     quantityInput.value = currentValue - 1;
//   }
// }

// // Функция для увеличения количества
// function increaseQuantity() {
//   var currentValue = parseInt(quantityInput.value);
//   quantityInput.value = currentValue + 1;
// }
