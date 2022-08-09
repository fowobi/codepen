var name2
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
      navMenu.classList.toggle("active"); }
     
      const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}







var images, arrayimage;


images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtVlX2VSO0azHaX7Bm9T-sRJ-cjZKwO1WOg&usqp=CAU', 'https://images.squarespace-cdn.com/content/v1/5b76c81055b02cf394f9ece5/1558698445226-6F0GSZSGHZUEVBBJEFVH/image3.jpeg?format=1500w', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxE3nN7CYO6oHKQJ5NaKKP1mhkVH6pTaE43Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hhmal0yu4TLHjDABqQI0cJsO_NnzBWgJCA&usqp=CAU'];
let element_showing_image = document.getElementById('showing-image');
arrayimage = images.shift();
element_showing_image.setAttribute("src", arrayimage);
images.push(arrayimage);


document.getElementById('next-btn').addEventListener('click', (event) => {
  let element_showing_image2 = document.getElementById('showing-image');
  arrayimage = images.shift();
  element_showing_image2.setAttribute("src", arrayimage);
  images.push(arrayimage);

});

document.getElementById('previous-btn').addEventListener('click', (event) => {
  let element_showing_image3 = document.getElementById('showing-image');
  arrayimage = images.pop();
  element_showing_image3.setAttribute("src", arrayimage);
  images.unshift(arrayimage);

});

var comment;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}
var earnings, input_value, expenses, balance, earning_total, expenses_total;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings = [];
expenses = [];
balance = [];
earning_total = 0;
expenses_total = 0;


document.getElementById('button').addEventListener('click', (event) => {
  input_value = getNumberOrString(document.getElementById('input').value);
  if (input_value > 0) {
    earnings.unshift(input_value);
    let element_earnings_list = document.getElementById('earnings-list');
    let new_li = document.createElement('li');
    let new_span = document.createElement('span');
    new_span.innerText = earnings.reduce((a,b) => a+b, 0);

    new_li.appendChild(new_span);

    element_earnings_list.appendChild(new_li);
  }
  let element_earn_total = document.getElementById('earn-total');
  element_earn_total.innerText = earnings.reduce((a,b) => a+b, 0);

});

document.getElementById('button').addEventListener('click', (event) => {
  input_value = getNumberOrString(document.getElementById('input').value);
  if (input_value < 0) {
    expenses.unshift(input_value);
    let element_expenses_list = document.getElementById('expenses-list');
    let new_li2 = document.createElement('li');
    let new_span2 = document.createElement('span');
    new_span2.innerText = expenses.reduce((a,b) => a+b, 0);

    new_li2.appendChild(new_span2);

    element_expenses_list.appendChild(new_li2);
  }
  let element_expense_total = document.getElementById('expense-total');
  element_expense_total.innerText = expenses.reduce((a,b) => a+b, 0);

});

document.getElementById('button').addEventListener('click', (event) => {
  balance.unshift(getNumberOrString(document.getElementById('input').value));
  let element_balance = document.getElementById('balance');
  element_balance.innerText = balance.reduce((a,b) => a+b, 0);

});










var comment;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


comment = [];


document.getElementById('comment-sub').addEventListener('click', (event) => {
  comment = getNumberOrString(document.getElementById('ta-comment').value);
  let element_comment_list = document.getElementById('comment-list');
  let new_li = document.createElement('li');
  let new_ul = document.createElement('ul');
  new_ul.innerText = comment;

  new_li.appendChild(new_ul);

  element_comment_list.appendChild(new_li);

});





