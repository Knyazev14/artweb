import { openSelector } from './modules/clickClass.js'




document.addEventListener('DOMContentLoaded', function(){

       //Меню сайта
       const openMenu = new openSelector({
        selectorClick: '.menu__icon',
        selectorAddClass: '.menu',
        selectorSecondAddClass: 'body',
        newClass: 'menu__is-open',
        noSelectorClickRemove: true
    });
})