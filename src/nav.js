import Bg from './Assets/bg2.jpg';

const myNav = () => {
  const content = document.querySelector('#content');
  const nav = document.createElement('nav');
  const section = document.createElement('section');
  const myBg = new Image();
  myBg.src = Bg;
  section.classList.add('menu');
  nav.classList.add('nav');
  nav.textContent = 'Take Me Away Restaurant';
  section.innerHTML = `
  <ul class="menu-list">
    <li class="list">
      <button class="home">Home</button>
    </li>
    <li class="list">
      <button>Menu</button>
    </li>
    <li class="list">
      <button>Contact</button>
    </li>
  </ul>
  <img src="${myBg.src}" alt="" width=300>
  `;
  content.appendChild(nav);
  content.appendChild(section);
};

export default myNav;
