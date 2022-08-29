let question = document.querySelectorAll('.faqs__ques');
let menuBtn = document.querySelector('#menuBtn');
let closeBtn = document.querySelector('#closeBtn');
let navBar = document.querySelector('#navBar');
let navBg = document.querySelector('#navBg');
let changeLang = document.querySelector('#changeLang');
let lang__item = document.querySelectorAll('.lang__item');

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

changeLang.addEventListener('click', ()=>{
  document.querySelector('#langList').classList.toggle('hideList')
})

lang__item.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector('#langList').classList.remove('hideList')
    })
   
})