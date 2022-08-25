let question = document.querySelectorAll('.faqs__ques');
let answer = document.querySelector('#answer');

question.forEach(item => {
    item.addEventListener("click", () => {
        item.nextElementSibling.classList.toggle("openUp");
        // item.children.classList.add("bx-minus")
    })
   
})