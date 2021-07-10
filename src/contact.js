import chef from './Assets/chef.png'

const contact = () => {
  const content = document.querySelector('#content');
  const contacts = document.createElement('div');
  const myChef = new Image();
  myChef.src = chef
  contacts.innerHTML = `
    <h2>Contact the staff on duty</h2>
    <article>
        <h3>Chef Damon</h3>
        <p>+2348199008773</p>
        <p>chefdamon@email.com</p>
        <img src="${myChef.src}" alt="" width="100">
    </article>
  `;
  content.appendChild(contacts)
}

export default contact;