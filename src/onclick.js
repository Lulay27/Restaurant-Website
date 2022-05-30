import homePage from './home.js';

const clickEvents = (() => {

    // another problem here similar to the append parent in home.js
    // addeventlistener is root of problem also breaks the dev server
    // also this problem deletes my bundle.js and creates main.js and runetime.js
    // same as last problem !!

    // problem comes from the webpackhtmlplugin
    // the index.html it is generating src is main.js/runtime.js
    // probably change that to bundle.js in config to fix
    // cant change config output filename from [name].js to anything
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
        // for example if menu is pressed remove home/contact pages
        // and renderMenu
        // same for home and contact on clicks


        // if menu is pressed remove current html
        if (e.target.id == 'menu') {
            homePage.removeHtml();
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
