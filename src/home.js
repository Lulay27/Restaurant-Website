// main module

const homePage = (() => {
    // creates element, class name, innerHTML, and appends
    const elementCreator = (name,type,text,parent) => {
        const temp = document.createElement(type);
        temp.id = name;
        temp.innerHTML = text
        document.querySelector(parent).appendChild(temp);
    }

    elementCreator('home-header-page','div','','#content');
    elementCreator('menu-header-page','div','','#content');
    elementCreator('contact-header-page','div','','#content');

    elementCreator('','header','','#home-header-page');
    elementCreator('home','button','Home','header');
    elementCreator('menu','button','Menu','header');
    elementCreator('contact','button','Contact','header');
    document.querySelector('#home').className = 'tab';
    document.querySelector('#menu').className = 'tab';
    document.querySelector('#contact').className = 'tab';
    elementCreator('','main','','#home-header-page');
    elementCreator('main-img','img','','main');
    elementCreator('title-container','div','','main');
    elementCreator('','h1','Mediocore Eats','#title-container');
    elementCreator('text1-container','div','','main');
    elementCreator('','p','Mediocore Eats founded by Eric Le based in Albuquerque, New Mexico. Over time the restuarant expanded outwards and found its success in chicken. '
    ,'#text1-container');
    elementCreator('','h3','-Eric','#text1-container');
    elementCreator('text2-container','div','','main');
    elementCreator('','h3','Hours','#text2-container');
    elementCreator('','ul','Sunday: 5pm - 9pm','#text2-container');
    elementCreator('','ul','Monday: CLOSED','#text2-container');
    elementCreator('','ul','Tuesday: CLOSED','#text2-container');
    elementCreator('','ul','Wednesday: CLOSED','#text2-container');
    elementCreator('','ul','Thursday: CLOSED','#text2-container');
    elementCreator('','ul','Friday: 5pm - 9pm','#text2-container');
    elementCreator('','ul','Saturday: 5pm - 9pm','#text2-container');
    elementCreator('text3-container','div','','main');
    elementCreator('','h3','Location','#text3-container');
    elementCreator('','div','308 Negra Arroyo Lane, Albuquerque, New Mexico','#text3-container');
    elementCreator('','footer','','#home-header-page');
    elementCreator('','div','Website created by Eric Le','footer');
    
    const renderHome = () => {      // initial load display home only
        removeHtml('menu-header-page');
        removeHtml('contact-header-page');
    }

    const removeHtml = (tabId) => {
        document.getElementById(tabId).style.display = 'none';
    }

    const revealHtml = (tabId) => {
        document.getElementById(tabId).style.display = 'block';
    }

    return {
        elementCreator,
        renderHome,
        removeHtml,
        revealHtml,
    };

})();

export default homePage;