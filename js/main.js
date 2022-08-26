let question = document.querySelectorAll('.faqs__ques');
let menuBtn = document.querySelector('#menuBtn');
let closeBtn = document.querySelector('#closeBtn');
let navBar = document.querySelector('#navBar');
let navBg = document.querySelector('#navBg');

question.forEach(item => {
    item.addEventListener("click", () => {
        item.nextElementSibling.classList.toggle("openUp");
        // item.children.classList.add("bx-minus")
    })
   
})

menuBtn.addEventListener('click', ()=>{
    navBar.classList.add('open-menu')
    navBg.classList.add('open-bg');
    closeBtn.classList.add('hide-btn')
})
closeBtn.addEventListener('click', ()=>{
    navBar.classList.remove('open-menu')
    navBg.classList.remove('open-bg')
    closeBtn.classList.remove('hide-btn')
})