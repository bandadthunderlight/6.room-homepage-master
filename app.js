const rightSlider = document.querySelector('.right-slider')
const leftSlider = document.querySelector('.left-slider')
const firstParagraphTitle = document.querySelector('.firstParagraphTitle')
const firstParagraph = document.querySelector('.firstParagraph')
const sliderContainer = document.querySelector('.sliderContainer')
const navbarContainer = document.querySelector('.navbarContainer')
const hamburgerIcon = document.querySelector('#hamburgerIcon')
const navbatItemsMobile = document.querySelector('.navbatItems-mobile')
const hamburgerClose = document.querySelector('#hamburgerClose')

rightSlider.addEventListener('click', slideRightHandler)
leftSlider.addEventListener('click', slideLefttHandler)

const data = [
    { id: 1, title: 'Discover innovative ways to decorate', text: " We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", img: './images/desktop-image-hero-1.jpg' },
    { id: 2, title: 'We are available all across the globe', text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", img: './images/desktop-image-hero-2.jpg' },
    { id: 3, title: ' Manufactured with the best materials', text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.", img: './images/desktop-image-hero-3.jpg' },
]

var idFlag = 1

hamburgerIcon.addEventListener('click' , mobilemenuHandler)
hamburgerClose.addEventListener('click' , hamburgerCloseHandler)

function slideRightHandler() {
    if (idFlag < 3) {
        idFlag++
    } else {
        idFlag = 1
    }
    firstParagraphTitle.textContent = data[idFlag - 1].title
    firstParagraph.textContent = data[idFlag - 1].text
    sliderContainer.classList = 'sliderContainer'
    sliderContainer.classList.add(`Back${idFlag}`)
}
function slideLefttHandler() {
    if (idFlag > 1) {
        idFlag--
    } else {
        idFlag = 3
    }
    firstParagraphTitle.textContent = data[idFlag - 1].title
    firstParagraph.textContent = data[idFlag - 1].text
    sliderContainer.classList = 'sliderContainer'
    sliderContainer.classList.add(`Back${idFlag}`)
}

function resizeHandler() {
    console.log('resizing');
    if(window.innerWidth<700){
        console.log('small-size');
        navbarContainer.classList.add('display-none')
    }else{
        console.log('big-size');
        navbarContainer.classList.remove('display-none')
        navbatItemsMobile.style.visibility = 'hidden'
    }
    console.log(window.innerWidth); 
}

function mobilemenuHandler() {
    navbatItemsMobile.style.visibility = 'visible'
}
function hamburgerCloseHandler() {
    console.log('close is running');
    navbatItemsMobile.style.visibility = 'hidden'
}