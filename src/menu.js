import homePage from './home.js';

// could make code simplier by keeping header the same instead of redoing all
// also problem occurs here b/c I use header,main, and footer. Need to make divs for 
// menu and contact pages

// fixed by having all 3 divs containing all info to be rendered at the start always

// soln have all 3 tabs already created instantly and reveal/hide on click

const menuPage = (() => {

    // rememeber ID's must be unique have to manually change
    // ok i confused myself with the naming i guess header are the tab containers
    // and menu-container is the real 'header'

    homePage.elementCreator('menu-container','div','','#menu-header-page');
    homePage.elementCreator('home','button','Home','#menu-container');
    homePage.elementCreator('menu','button','Menu','#menu-container');
    homePage.elementCreator('contact','button','Contact','#menu-container');
    homePage.elementCreator('menu-main-page','div','','#menu-header-page');
    homePage.elementCreator('main-img','img','','#menu-main-page');
    homePage.elementCreator('menu-title-container','div','','#menu-main-page');
    homePage.elementCreator('','h1','Mediocore Eats','#menu-title-container');
    homePage.elementCreator('menu-text1-container','div','','#menu-main-page');
    homePage.elementCreator('','p','Mediocore Eats founded by Eric Le based in Albuquerque, New Mexico. Over time the restuarant expanded outwards and found its success in chicken. '
    ,'#menu-text1-container');
    homePage.elementCreator('','h3','-Eric','#menu-text1-container');
    homePage.elementCreator('menu-text2-container','div','','#menu-main-page');
    homePage.elementCreator('','h3','Hours','#menu-text2-container');
    homePage.elementCreator('','ul','Sunday: 5pm - 9pm','#menu-text2-container');
    homePage.elementCreator('','ul','Monday: CLOSED','#menu-text2-container');
    homePage.elementCreator('','ul','Tuesday: CLOSED','#menu-text2-container');
    homePage.elementCreator('','ul','Wednesday: CLOSED','#menu-text2-container');
    homePage.elementCreator('','ul','Thursday: CLOSED','#menu-text2-container');
    homePage.elementCreator('','ul','Friday: 5pm - 9pm','#menu-text2-container');
    homePage.elementCreator('','ul','Saturday: 5pm - 9pm','#menu-text2-container');
    homePage.elementCreator('menu-text3-container','div','','#menu-main-page');
    homePage.elementCreator('','h3','Location','#menu-text3-container');
    homePage.elementCreator('','div','308 Negra Arroyo Lane, Albuquerque, New Mexico','#menu-text3-container');
    homePage.elementCreator('footer-main-page','div','','#menu-main-page');
    homePage.elementCreator('','div','Website created by Eric Le','#footer-main-page');

    const renderMenu = () => {

        homePage.revealHtml('menu-main-page');

        
    }


    return {
        renderMenu,
    }

   

})();

export default menuPage;