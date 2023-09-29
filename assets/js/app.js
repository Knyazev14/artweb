import { openSelector } from './modules/clickClass.js'
import { scrollTrigger} from './modules/scrollTrigger.js'
import { ajaxForm } from './modules/form.js'


document.addEventListener('DOMContentLoaded', function(){

     //Меню сайта
    let openMenu = new openSelector({
        selectorClick: '.menu__icon',
        selectorAddClass: '.menu',
        selectorSecondAddClass: 'body',
        newClass: 'menu__is-open',
        noSelectorClickRemove: true
    });
    
    //Фиксированная шапка
    let myFixedMenu = new scrollTrigger({
        element: '.header__container',
        elementTrigger: '.header__body',
        addClass: 'is-scrolled'
    });
    
    //Стек технололгий
    let openSteckItem = new openSelector({
        selectorClick: '.steck__card',
        selectorAddClass: '.steck__card',
        selectorSecondAddClass: false,
        newClass: 'steck__card-open',
        noSelectorClickRemove: false
    });

   

    //Отправка форм
    const allForms = document.querySelectorAll('.ajax-form')
    allForms.forEach(form=>{
        form.addEventListener('submit',  ajaxForm)

    })


    //Закрытие модального окна
    const modal = document.querySelector('.modal')

    document.addEventListener('click', function(e){
        if(e.target.closest('.btn-modal')){
            modal.classList.add('modal-is-open')
        }
        if(!e.target.closest('.modal') && !e.target.closest('.btn-modal')){
            modal.classList.remove('modal-is-open')
        }
        if(e.target.closest('.modal__close')){
            modal.classList.remove('modal-is-open')
        }
        
    })
    
})