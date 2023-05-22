
//Carousel
const controls = document.querySelectorAll('.control')
let item = 0
const items = document.querySelectorAll('.item')

const maxItems = items.length

controls.forEach(control => {
  control.addEventListener('click', () => {
    const isLeft = control.classList.contains('arrow-left')
    if (isLeft) {
      item -= 1
    } else {
      item += 1
    }

    if (item >= maxItems) {
      item = 0
    }

    if (item < 0) {
      item = maxItems - 1
    }

    items.forEach(item => item.classList.remove('item'))

    items[item].scrollIntoView({
      inline: 'center',
      behavior: 'smooth'
    })
  })
})
