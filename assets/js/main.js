/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for( i=0;i<skillsContent.lenght;i++){
        skillsContent[i].className = 'skills_content skills_close'
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }

    if(itemClass === 'skills_content skills_open'){
        this.parentNode.className = 'skills_content skills_close'
    }
}

skillsHeader.forEach((el)=> {
    el.addEventListener('click',toggleSkills)
})

/*==================== Qualification Tabs ====================*/
const tabs = document.querySelectorAll('[data-target'),
    tabContents = document.querySelectorAll('[data-content')

tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/*==================== Portfolio Swipper ====================*/
let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      mousewheel: false,
      preventInteractionOnTransition: true,
    },
});

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)