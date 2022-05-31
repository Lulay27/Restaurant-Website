import homePage from './home.js';
import menuPage from './menu.js';

const clickEvents = (() => {

    const navBtn = document.querySelector('#content');
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const aboutBtn = document.querySelector('#contact');
    
    navBtn.addEventListener('click',render);
    
    function render(e) {

        if (e.target.id == 'menu') {
            homePage.removeHtml('home-header-page');
            // homePage.removeHtml('menu-header-page');
            homePage.removeHtml('contact-header-page');
            
            homePage.revealHtml('menu-header-page');
        }

        if (e.target.id == 'home') {
            // homePage.removeHtml('home-header-page');
            homePage.removeHtml('menu-header-page');
            homePage.removeHtml('contact-header-page');
            
            homePage.revealHtml('home-header-page');
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
