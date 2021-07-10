import moi from './Assets/moi.jpeg'

const menuList = () => {
  const content = document.querySelector("#content");
  const menuItem = document.createElement("section");
  const myMoi = new Image();
  myMoi.src = moi;
  menuItem.classList.add('main_menu')
  menuItem.innerHTML = `<h2>Menu</h2>
    <article>
        <h3>moi-moi</h3>
        <p>about moi-moi and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, labore?</p>
        <p>$1000</p>
        <img src="${myMoi.src}" alt="my moi">
    </article>
    <article>
        <h3>moi-moi</h3>
        <p>about moi-moi and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, labore?</p>
        <p>$1000</p>
        <img src="${myMoi.src}" alt="my moi">
    </article>
    <article>
        <h3>moi-moi</h3>
        <p>about moi-moi and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, labore?</p>
        <p>$1000</p>
        <img src="${myMoi.src}" alt="my moi">
    </article>
    <article>
        <h3>moi-moi</h3>
        <p>about moi-moi and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, labore?</p>
        <p>$1000</p>
        <img src="${myMoi.src}" alt="my moi">
    </article>
    <article>
        <h3>moi-moi</h3>
        <p>about moi-moi and Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, labore?</p>
        <p>$1000</p>
        <img src="${myMoi.src}" alt="my moi">
    </article>
    `;

  content.appendChild(menuItem);
};

export default menuList;
