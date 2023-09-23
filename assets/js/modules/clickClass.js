function openSelector(options) {
    const {
        selectorClick,
        selectorAddClass,
        selectorSecondAddClass,
        newClass,
        noSelectorClickRemove
    } = options

    this.selectorClick = document.querySelectorAll(selectorClick)
    this.noSelectorClickRemove = noSelectorClickRemove
    this.selectorSecondAddClass = document.querySelector(selectorSecondAddClass)
    
    this.giveClass = (e) => {
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

        const clickedSelector = e.target.closest(selectorAddClass)
        if (clickedSelector) {
            clickedSelector.classList.toggle(newClass)
            if(this.selectorSecondAddClass && clickedSelector.classList.contains(newClass)){
                this.selectorSecondAddClass.classList.add(newClass)
            }
        }

    }

    if (this.selectorClick) {
        this.selectorClick.forEach(singleSelector => {
            singleSelector.addEventListener('click', this.giveClass)
        })
    }
}

export { openSelector }

