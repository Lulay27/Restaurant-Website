import homePage from './home.js';

const menuPage = (() => {

    homePage.elementCreator('menu-container','div','','#menu-header-page');
    homePage.elementCreator('home','button','Home','#menu-container');
    homePage.elementCreator('menu','button','Menu','#menu-container');
    homePage.elementCreator('contact','button','Contact','#menu-container');
    homePage.elementCreator('menu-main-page','div','','#menu-header-page');
    homePage.elementCreator('main-img','img','','#menu-main-page');
    homePage.elementCreator('menu-title-container','div','','#menu-main-page');
    homePage.elementCreator('','h1','Menu','#menu-title-container');
    homePage.elementCreator('menu-text1-container','div','','#menu-main-page');
    homePage.elementCreator('','p','White bagle with cream cheese.'
    ,'#menu-text1-container');
    homePage.elementCreator('','h3','Plain Bagle','#menu-text1-container');
    homePage.elementCreator('menu-text2-container','div','','#menu-main-page');
    homePage.elementCreator('','h3','Snacks','#menu-text2-container');
    homePage.elementCreator('','ul','Fake cheese and crackers','#menu-text2-container');
    homePage.elementCreator('','ul','Apple slices','#menu-text2-container');
    homePage.elementCreator('','ul','Plain white bagle','#menu-text2-container');
    homePage.elementCreator('','ul','Orange slices','#menu-text2-container');
    homePage.elementCreator('','ul','Frosted Flakes cereal','#menu-text2-container');
    homePage.elementCreator('','ul','Bannana peeled','#menu-text2-container');
    homePage.elementCreator('','ul','Boiled egg','#menu-text2-container');
    homePage.elementCreator('menu-text3-container','div','','#menu-main-page');
    homePage.elementCreator('','h3','Location','#menu-text3-container');
    homePage.elementCreator('','div','308 Negra Arroyo Lane, Albuquerque, New Mexico','#menu-text3-container');
    homePage.elementCreator('footer-main-page','div','','#menu-main-page');
    homePage.elementCreator('','div','Website created by Eric Le','#footer-main-page');

    return {
        
    }

})();

export default menuPage;