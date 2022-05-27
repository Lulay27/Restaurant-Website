// module pattern creates the load (js version of classes)
const homePage = (() => {
    // constants for html elements
    const content = document.querySelector('#content');

    const header = document.createElement('header');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const social = document.createElement('div');

    const main = document.createElement('main');
    const mainImg = document.createElement('img');
    const titleContainer = document.createElement('div');
    const titleName = document.createElement('h1')

    const text1Container = document.createElement('div');
    const text1 = document.createElement('p');
    const text1Name = document.createElement('h3');

    const text2Container = document.createElement('div');
    const hours = document.createElement('h3');
    const sunday = document.createElement('ul');
    const monday = document.createElement('ul');
    const tuesday = document.createElement('ul');
    const wednesday = document.createElement('ul');
    const thursday = document.createElement('ul');
    const friday = document.createElement('ul');
    const saturday = document.createElement('ul');

    const text3Container = document.createElement('div');
    const location = document.createElement('h3');
    const address = document.createElement('p');



    const tester1 = () => {
        header.innerHTML = 'hiiii';
        content.appendChild(header);
    }

    // creates element and class name for it
    const elementCreator = (name,type) => {
        const temp = document.createElement(type);
        temp.className = name;
    }

    const qSelect = (name,text) => {
        document.querySelector(name).innerHTML = text;
    }
    
    elementCreator('.home','div');

    
    
    return {
        tester1,
    }

})();

export default homePage;