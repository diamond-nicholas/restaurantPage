const myNav = () => {
  const content = document.querySelector('#content');
  const nav = document.createElement('nav');
  const section = document.createElement('section');
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
  </ul>`;
  content.appendChild(nav);
  content.appendChild(section);
};

export default myNav;