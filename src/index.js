import './styles.css';
import Bg from './Assets/bg.jpg';
import home from './home';
import myNav from './nav';
import menuList from './menu';
import contact from './contact';

const myBg = new Image();
myBg.src = Bg;

const content = document.getElementById('content');
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
  if (value === 'Contact') {
    content.innerHTML = '';
    myNav();
    contact();
  }
});
