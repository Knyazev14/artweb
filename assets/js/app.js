import { openSelector } from './modules/clickClass.js'
import { scrollTrigger} from './modules/scrollTrigger.js'




document.addEventListener('DOMContentLoaded', function(){

     //Меню сайта
    const openMenu = new openSelector({
        selectorClick: '.menu__icon',
        selectorAddClass: '.menu',
        selectorSecondAddClass: 'body',
        newClass: 'menu__is-open',
        noSelectorClickRemove: true
    });

    //Фиксированная шапка
    const myFixedMenu = new scrollTrigger({
        element: '.header__container',
        elementTrigger: '.header__body',
        addClass: 'is-scrolled'
    });

})