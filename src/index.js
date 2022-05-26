import createDiv from "./msg";
import message from "./msg";
import "./styles/style.css";
import Icon from './assets/sunset-background.png';

createDiv("The Earth is flat. - Kyrie");

const testImg = document.createElement('img');
testImg.className = 'testImg';
testImg.src = Icon;
document.querySelector('.message').appendChild(testImg);

