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
                  <li class="list"><button>Menu</button></li>
                  <li class="list"><button>Contact us</button></li>
                  <li class="list"><button>About Us </button></li>
              </ul>
          </section>
      <section class="about">
        <h6>About TakeMe Away Restaurant</h6>
        <p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p>
    </section>
    <section class="hours">
        <h6>Opening Hours</h6>
        <ul>
          <li>Sunday: 8am - 8pm</li>
          <li>Monday: 6am - 6pm</li>
          <li>Tuesday: 6am - 6pm </li>
          <li>Wednesday: 6am - 6pm</li>
          <li>Thursday: 6am - 10pm</li>
          <li>Friday: 6am - 10pm</li>
          <li>Saturday: 8am - 10pm</li>
        </ul>

    </section>
      </main>`;

   return element;
}

document.body.appendChild(component());