// getting all html elements
let list1 = Array.from(document.getElementsByClassName('list1'));
let lists = Array.from(document.getElementsByClassName('lists'));
let mylist = Array.from(document.getElementsByClassName('mylist'));
let price = Array.from(document.getElementsByClassName('price'));
let counter = Array.from(document.getElementsByClassName('counter'));
let totalfin = document.getElementById('totalfin');

// function plus
let plus = Array.from(document.getElementsByClassName('add'));
for (let i = 0; i < mylist.length; i++) {
  plus[i].addEventListener('click', function () {
    counter[i].innerText++;
    calculateSum(); // Call calculateSum() to update the total
  });
}

// function minus
let minus = Array.from(document.getElementsByClassName('minus'));
for (let i = 0; i < mylist.length; i++) {
  minus[i].addEventListener('click', function () {
    if (counter[i].innerHTML > 0) {
      counter[i].innerText--;
      calculateSum(); // Call calculateSum() to update the total
    }
  });
}

// function remove
let buttonremove = Array.from(document.getElementsByClassName('remove'));
for (let i = 0; i < mylist.length; i++) {
  buttonremove[i].addEventListener('click', function () {
    let buttonclick = event.target;
    buttonclick.parentElement.remove();
    price[i].innerHTML = 0;
    calculateSum(); // Call calculateSum() to update the total
  });
}

// somme totale
function calculateSum() {
  let somme = 0;
  for (let i = 0; i < mylist.length; i++) {
    totalfin.value = (Number(totalfin.value) - Number(total[i].value)) + (Number(price[i].innerText) * Number(counter[i].innerText));
    total[i].value = Number(price[i].innerText) * Number(counter[i].innerText);
    somme += Number(total[i].value);
  }
  totalfin.value = somme;
}
