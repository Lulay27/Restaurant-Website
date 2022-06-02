import homePage from './home.js';

const contactPage = (() => {

    homePage.elementCreator('contact-container','div','','#contact-header-page');
    homePage.elementCreator('home','button','Home','#contact-container');
    homePage.elementCreator('menu','button','Menu','#contact-container');
    homePage.elementCreator('contact','button','Contact','#contact-container');
    homePage.elementCreator('contact-main-page','div','','#contact-header-page');
    homePage.elementCreator('main-img','img','','#contact-main-page');
    homePage.elementCreator('contact-title-container','div','','#contact-main-page');
    homePage.elementCreator('','h1','Contact','#contact-title-container');
    homePage.elementCreator('contact-text1-container','div','','#contact-main-page');
    homePage.elementCreator('','p','Medicore eats behind the scenes is run soley by Eric Le. Contact below for questions'
    ,'#contact-text1-container');
    homePage.elementCreator('','h3','-Eric','#contact-text1-container');
    homePage.elementCreator('contact-text2-container','div','','#contact-main-page');
    homePage.elementCreator('','h3','Eric Le','#contact-text2-container');
    homePage.elementCreator('','ul','Instagram: eric_le27','#contact-text2-container');
    homePage.elementCreator('','ul','Facebook: Eric Le','#contact-text2-container');
    homePage.elementCreator('','ul','Phone: 250-991-9991','#contact-text2-container');
    homePage.elementCreator('contact-text3-container','div','','#contact-main-page');
    homePage.elementCreator('','h3','NOTICE','#contact-text3-container');
    homePage.elementCreator('','div',' Please do not contact on weekends and weekdays','#contact-text3-container');
    homePage.elementCreator('footer-contact-page','div','','#contact-main-page');
    homePage.elementCreator('','div','Website created by Eric Le','#footer-contact-page');

    return {

    }

})();

export default contactPage;