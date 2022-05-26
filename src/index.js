import createDiv from "./msg";
// import message from "./msg";
import "./styles/style.css";
import Icon from './components/sunset-background.png';

createDiv('What a beautiful sunset - Lebron James');

const testImg = document.createElement('img');
testImg.className = 'testImg';
testImg.src = Icon;
document.querySelector('.message').appendChild(testImg);

