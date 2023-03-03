let headerBurger = document.querySelector('.header__burger')

let back = document.querySelector('body')
let headerList = document.querySelector('.header__list')
let singIn = document.querySelector('.header__signin')

headerBurger.onclick = function () {
  headerBurger.classList.toggle('active')
  back.classList.toggle('lock')
  headerList.classList.toggle('active')
  singIn.classList.toggle('active')
}

headerList.onclick = function () {
  headerList.classList.remove('active')
  back.classList.toggle('lock')
  headerBurger.classList.remove('active')
  singIn.classList.remove('active')
}
