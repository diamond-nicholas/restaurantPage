import _ from 'lodash';
import './styles.css';
import Bg from './bg.jpg';

function component() {
    const element = document.createElement('div');
    const myBg =  new Image();
    myBg.src = Bg

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
   element.innerHTML = `<nav class="nav">Take Me Away Restaurant</nav>
      <main>
          <section class="menu">
              <ul class="menu-list">
                  <li><button>Menu</button></li>
                  <li><button>Contact us</button></li>
                  <li><button>About Us </button></li>
              </ul>
          </section>
      </main>`;

   return element;
}

document.body.appendChild(component());