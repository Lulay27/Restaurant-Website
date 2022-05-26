const message = () => {
    return "Spider-Man";
}

const createDiv = (msg) => {
    const randomDiv = document.createElement('div');
    randomDiv.className = 'message';
    randomDiv.innerHTML = msg;
    document.querySelector('#content').appendChild(randomDiv);
}

export default createDiv;