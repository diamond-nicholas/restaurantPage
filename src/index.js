import './styles.css';
import home from './home';
import myNav from './nav';
import menuList from './menu';
import contact from './contact';

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
