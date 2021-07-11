import _ from 'lodash';
import './styles.css';
import Bg from './Assets/bg.jpg';
import home from './home.js'
import myNav from './nav.js';
import menuList from './menu.js';
import contact from './contact.js';


const myBg =  new Image();
myBg.src = Bg


const content = document.getElementById("content");
myNav();
home();

document.addEventListener('click', (event) => {
  const value = event.target.innerText;

  if (value === 'Home') {
    content.innerHTML = '';
    myNav();
    home();
  }
  if (value === 'Menu') {
    content.innerHTML = '';
    myNav();
    menuList();
  }
  if (value === "Contact") {
    content.innerHTML = "";
    myNav();
    contact();
  }
});
// menuList();
// contact()
// const main = document.querySelector('#content')
// const btn = document.createElement('button');
// btn.innerHTML = 'click me'
// btn.onclick = home
// main.appendChild(btn)