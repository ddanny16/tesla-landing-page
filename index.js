const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.navigation')
const fas = document.querySelector('.fas')

const IS_ACTIVE = 'is--active'

const toggleNavigation = () =>{
    navigation.classList.toggle(IS_ACTIVE)
}

const click ='click'

menuBtn.addEventListener(click , toggleNavigation)
fas.addEventListener(click , toggleNavigation)