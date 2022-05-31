import homePage from './home.js';

// could make code simplier by keeping header the same instead of redoing all
// also problem occurs here b/c I use header,main, and footer. Need to make divs for 
// menu and contact pages

// fixed by having all 3 divs containing all info to be rendered at the start always

// soln have all 3 tabs already created instantly and reveal/hide on click

const menuPage = (() => {

    const renderMenu = () => {

        homePage.revealHtml('menu-main-page');

        homePage.elementCreator('menu-container','div','','#menu-main-page');
        homePage.elementCreator('home','button','Home','#menu-container');
        homePage.elementCreator('menu','button','Menu','#menu-container');
        homePage.elementCreator('contact','button','Contact','#menu-container');
    }


    return {
        renderMenu,
    }

   

})();

export default menuPage;