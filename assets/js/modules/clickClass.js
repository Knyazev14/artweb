function openSelector(options) {
    let {
        selectorClick,
        selectorAddClass,
        selectorSecondAddClass,
        newClass,
        noSelectorClickRemove
    } = options

    this.selectorClick = document.querySelectorAll(selectorClick)

    this.giveClass = (e) => {

        this.noSelectorClickRemove = noSelectorClickRemove
        //Кому добавляем
        this.selectorAddClass = document.querySelector(selectorAddClass)
        //Кому добавляем дополнительно
        this.selectorSecondAddClass = document.querySelector(selectorSecondAddClass)

        //Удалять ли при клики классы у других блоков
        if (this.noSelectorClickRemove) {
            this.selectorClick.forEach(singleSelector => {
                if (singleSelector !== e.target.closest(selectorAddClass)) {
                    singleSelector.classList.remove(newClass)
                    if(this.selectorSecondAddClass && !singleSelector.classList.contains(newClass)){
                        this.selectorSecondAddClass.classList.remove(newClass)
                    }
                }
            })
        }

        let clickedSelector = e.target.closest(selectorAddClass)
        if(!clickedSelector){
            clickedSelector = this.selectorAddClass
        }
        if (clickedSelector) {
            clickedSelector.classList.toggle(newClass)
            if(this.selectorSecondAddClass && clickedSelector.classList.contains(newClass)){
                this.selectorSecondAddClass.classList.add(newClass)
            }
        }

    }


    //Отслеживаем событие клика
    if (this.selectorClick) {
        this.selectorClick.forEach(singleSelector => {
            singleSelector.addEventListener('click', this.giveClass)
        })
    }
}

export { openSelector }

