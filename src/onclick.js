const clickEvents = (() => {

    const navBtn = document.querySelector('#tab');
    const homeBtn = document.querySelector('.home');
    const menuBtn = document.querySelector('.menu');
    const aboutBtn = document.querySelector('.contact');
    navBtn.addEventListener('click',render);

    const render = (e) => {

    }

    return {
        render,
    };


})();
