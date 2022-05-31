import homePage from './home.js';
import menuPage from './menu.js';

const clickEvents = (() => {

    const navBtn = document.querySelector('#content');
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const aboutBtn = document.querySelector('#contact');
    
    navBtn.addEventListener('click',render);
    
    function render(e) {

        // my STRAT
        // each home.js, menu.js, and contact.js
        // will each create its own div with unique class names
        // that class name will append to the static div 'content'
        // the pattern for each if statement is as follows:
        // for example if menu is pressed remove home/contact/menu pages
        // and renderMenu
        // same for home and contact on clicks


        // if menu is pressed remove current html

        // problem must check if page has been rendered to remove it
        if (e.target.id == 'menu') {
            homePage.removeHtml('home-main-page');
            homePage.removeHtml('menu-main-page');
            homePage.removeHtml('contact-main-page');
            
            menuPage.renderMenu();
        }


    }

    // const render = (e) => {      how come this not same as above
    //     console.log(e.target);
    // }

    return {
        render,
    };


})();

export default clickEvents;
