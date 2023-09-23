function scrollTrigger(options) {
    const {
        element,
        elementTrigger,
        addClass
    } = options

    this.element = document.querySelector(element);
    this.elementTrigger = document.querySelector(elementTrigger);
    let rect, scrollHeight, topHeight;

    this.scrollListen = () => {
        rect = this.elementTrigger.getBoundingClientRect();
        scrollHeight = rect.height;
        topHeight = window.scrollY;
        
        if (topHeight > scrollHeight) {
            this.element.classList.add(addClass);
        } else {
            this.element.classList.remove(addClass);
        }
    };

    if (this.element) {
        window.addEventListener('scroll', this.scrollListen);
    }
}

export { scrollTrigger };