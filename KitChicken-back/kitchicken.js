//const form = document.querySelector('form');
const ul_sl = document.getElementById('shopping-list');
const clear = document.getElementById('clear');
const rmChck = document.getElementById('rm-chck');
const pantryChck = document.getElementById('pantry-chck')
const add_btn = document.getElementById('add');
const save_btn = document.getElementById('save');
const def_btn = document.getElementById('def');

const ul_p = document.getElementById('pantry-list');
const clearPantry = document.getElementById('clear-pantry');
const addPantry = document.getElementById('add-pantry');
const rmChckP = document.getElementById('rm-chck-p');

const food = document.getElementById('item');
const pFood = document.getElementById('p-item');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

let pantryArray = localStorage.getItem('pantry') ? JSON.parse(localStorage.getItem('pantry')) : [];
localStorage.setItem('pantry', JSON.stringify(pantryArray));
const pantry = JSON.parse(localStorage.getItem('pantry'));

let savedArray = localStorage.getItem('saved') ? JSON.parse(localStorage.getItem('saved')) : [];
localStorage.setItem('saved', JSON.stringify(savedArray));
const saved = JSON.parse(localStorage.getItem('saved'));

const liMaker = (text) => {
   const li = document.createElement('li');
   li.id = text;
   li.style="font-size:40px"
   //li.textContent = text;
   li.innerHTML = '<input type="checkbox" style="width: 20px; height: 20px;"/> ' + text; 
   ul_sl.appendChild(li);
   
}

add_btn.addEventListener('click', function () {

  itemsArray.push(food.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(food.value);
  food.value = "";
});


data.forEach(item => {
  liMaker(item);
});

clear.addEventListener('click', function () {
  while (ul_sl.firstChild) {
    ul_sl.removeChild(ul_sl.firstChild);
  }
  itemsArray = [];
  localStorage.setItem('items', JSON.stringify(itemsArray));
});

rmChck.addEventListener('click', function () {
  var temps = Array.prototype.slice.call(ul_sl.childNodes),
        temp;
    while (temp = temps.pop()) {
        if (temp.firstChild && temp.firstChild.checked) {
            var idx = itemsArray.indexOf(temp.id);
            itemsArray.splice(idx, 1);
            localStorage.setItem('items', JSON.stringify(itemsArray));
            ul_sl.removeChild(temp);
        }
    }
  
});

save_btn.addEventListener('click', function(){
  savedArray = itemsArray.slice();
  localStorage.setItem('saved', JSON.stringify(savedArray));
});

def_btn.addEventListener('click', function(){
  savedArray.forEach(item =>{
    itemsArray.push(item);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(item);
  });  
});

pantryChck.addEventListener('click', function () {
  var temps = Array.prototype.slice.call(ul_sl.childNodes),
        temp;
    while (temp = temps.pop()) {
        if (temp.firstChild && temp.firstChild.checked) {
          var idx = itemsArray.indexOf(temp.id);
          itemsArray.splice(idx, 1);
          localStorage.setItem('items', JSON.stringify(itemsArray));
          ul_sl.removeChild(temp);
          //now put into pantry
          pantryArray.push(temp.id);
          localStorage.setItem('pantry', JSON.stringify(pantryArray));
          ul_p.appendChild(temp);
        }
    }
  
});

const liMakerP = (text) => {
  const li = document.createElement('li');
  li.id = text;
  li.style="font-size:40px"
  li.textContent = text;
  li.innerHTML = '<input type="checkbox" style="width: 20px; height: 20px;"/> ' + text;
  ul_p.appendChild(li);
  
}

addPantry.addEventListener('click', function () {

  pantryArray.push(pFood.value);
  localStorage.setItem('pantry', JSON.stringify(pantryArray));
  liMakerP(pFood.value);
  pFood.value = "";
});

pantry.forEach(item => {
  liMakerP(item);
});

clearPantry.addEventListener('click', function () {
  while (ul_p.firstChild) {
    ul_p.removeChild(ul_p.firstChild);
  }
  pantryArray = [];
  localStorage.setItem('pantry', JSON.stringify(pantryArray));
});

rmChckP.addEventListener('click', function () {
  var temps = Array.prototype.slice.call(ul_p.childNodes),
        temp;
    while (temp = temps.pop()) {
        if (temp.firstChild && temp.firstChild.checked) {
            var idx = pantryArray.indexOf(temp.id);
            pantryArray.splice(idx, 1);
            localStorage.setItem('pantry', JSON.stringify(pantryArray));
            ul_p.removeChild(temp);
        }
    }
  
});
