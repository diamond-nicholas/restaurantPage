import _ from 'lodash';
import './styles.css';
import Bg from './bg.jpg';
import home from './home.js'

const myBg =  new Image();
myBg.src = Bg

const main = document.querySelector('#content')
const btn = document.createElement('button');
btn.innerHTML = 'click me'
btn.onclick = home
main.appendChild(btn)