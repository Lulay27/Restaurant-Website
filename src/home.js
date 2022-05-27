// module pattern creates the load (js version of classes)
const homePage = (() => {
    // constants for html elements
    // const content = document.querySelector('#content');

    // const header = document.createElement('header');
    // const home = document.createElement('div');
    // const menu = document.createElement('div');
    // const social = document.createElement('div');

    // const main = document.createElement('main');
    // const mainImg = document.createElement('img');
    // const titleContainer = document.createElement('div');
    // const titleName = document.createElement('h1')

    // const text1Container = document.createElement('div');
    // const text1 = document.createElement('p');
    // const text1Name = document.createElement('h3');

    // const text2Container = document.createElement('div');
    // const hours = document.createElement('h3');
    // const sunday = document.createElement('ul');
    // const monday = document.createElement('ul');
    // const tuesday = document.createElement('ul');
    // const wednesday = document.createElement('ul');
    // const thursday = document.createElement('ul');
    // const friday = document.createElement('ul');
    // const saturday = document.createElement('ul');

    // const text3Container = document.createElement('div');
    // const location = document.createElement('h3');
    // const address = document.createElement('p');

    // creates element, class name, innerHTML, and appends
    const elementCreator = (name,type,text,parent) => {
        const temp = document.createElement(type);
        temp.className = name;
        temp.innerHTML = text
        document.querySelector(parent).appendChild(temp);
    }

    // element Creator ('className','elementType','text','parent')

    elementCreator('','header','','#content');
    elementCreator('home','div','Home','header');
    elementCreator('menu','div','Menu','header');
    elementCreator('contact','div','Contact','header');
    elementCreator('','main','','#content');
    elementCreator('main-img','img','','main'); // add a src to this
    // document.querySelector('.main-img').src=
    elementCreator('title-container','div','','main');
    elementCreator('','h1','Mediocore Eats','.title-container');
    elementCreator('text1-container','div','','main');
    elementCreator('','p','Most Medicore food in town.','.text1-container');
    elementCreator('','h3','-Eric','.text1-container');
    elementCreator('text2-container','div','','main');
    elementCreator('','h3','Sunday: 5pm - 9pm','.text2-container');
    elementCreator('','ul','Monday: CLOSED','.text2-container');
    elementCreator('','ul','Tuesday: CLOSED','.text2-container');
    elementCreator('','ul','Wednesday: CLOSED','.text2-container');
    elementCreator('','ul','Thursday: CLOSED','.text2-container');
    elementCreator('','ul','Friday: 5pm - 9pm','.text2-container');
    elementCreator('','ul','Saturday: 5pm - 9pm','.text2-container');
    elementCreator('text3-container','div','','main');
    elementCreator('text3-container','h3','Location','.text3-container');
    elementCreator('text3-container','div','308 Negra Arroyo Lane, Albuquerque, New Mexico','.text3-container');
    elementCreator('','footer','','main');
    elementCreator('','div','Website created by Eric Le','footer');

    
    
    

    
    
    return {
        
    }

})();

export default homePage;