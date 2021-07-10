const home = () => {
  const content = document.querySelector('#content');
  const homePage = document.createElement('main');

  homePage.innerHTML = `
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
      <section class="location">
        <h6>Location</h6>
        <p>123 Forest Drive, Forestville, Maine</p>
      </section>`;
  content.appendChild(homePage);

}

export default home;