function observe(){

// у нас есть Барт Симпсон и две анимации
// одна анимация перемещает Барта влево
// другая - вправо
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        entry.classList.add('open')
    })
}, {
    threshold: .5
})

observer.observe(document.querySelector('.services__card'))

}

export {observe}