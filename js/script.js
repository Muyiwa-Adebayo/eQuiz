let username = function username(){
    let name = document.querySelector('input').value
    return name
}

const submit = document.querySelector('.submit')

submit.addEventListener('click', ()=>{
    const user = document.querySelector('#username')
    user.textContent = username()
})

// const submittedAns = document.querySelector('.submitAns')

const question1 = document.querySelector('.question1')
const question2 = document.querySelector('.question2')
const question2b = document.querySelector('.question2').firstElementChild.nextElementSibling.nextElementSibling
const question3 = document.querySelector('.question3')
const question4 = document.querySelector('.question4')
const question5 = document.querySelector('.question5')

let score = 0;
let mark = 20;
let result = document.querySelector('.score')
const message = document.querySelector('.message')


question1.firstElementChild.addEventListener('click', ()=>{
    question1.firstElementChild.classList.add('btn-success')
    score+=mark
    result.innerHTML = `<p class="score">${score}</p>`
    console.log(score)
    const next = document.querySelector('#next1')
    next.classList.remove('disable')
})

question1.lastElementChild.addEventListener('click', ()=>{
    question1.lastElementChild.classList.add('btn-wrong')
    question1.firstElementChild.classList.add('btn-success')
    const next = document.querySelector('#next1')
    next.classList.remove('disable')
})

question1.firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', ()=>{
    question1.firstElementChild.nextElementSibling.nextElementSibling.classList.add('btn-wrong')
    question1.firstElementChild.classList.add('btn-success')
    const next = document.querySelector('#next1')
    next.classList.remove('disable')
})

question2b.addEventListener('click', ()=>{
    question2b.classList.add('btn-success')
    score+=mark
    result.innerHTML = `<p class="score">${score}</p>`
    console.log(score)
    const next = document.querySelector('#next2')
    next.classList.remove('disable')
})

question2.lastElementChild.addEventListener('click', ()=>{
    question2.lastElementChild.classList.add('btn-wrong')
    question2b.classList.add('btn-success')
    const next = document.querySelector('#next2')
    next.classList.remove('disable')
})

question2.firstElementChild.addEventListener('click', ()=>{
    question2.firstElementChild.classList.add('btn-wrong')
    question2b.classList.add('btn-success')
    const next = document.querySelector('#next2')
    next.classList.remove('disable')
})

question3.firstElementChild.addEventListener('click', ()=>{
    question3.firstElementChild.classList.add('btn-success')
    score+=mark
    result.innerHTML = `<p class="score">${score}</p>`
    console.log(score)
    const next = document.querySelector('#next3')
    next.classList.remove('disable')
})

question3.lastElementChild.addEventListener('click', ()=>{
    question3.lastElementChild.classList.add('btn-wrong')
    question3.firstElementChild.classList.add('btn-success')
    const next = document.querySelector('#next3')
    next.classList.remove('disable')
})

question3.firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', ()=>{
    question3.firstElementChild.nextElementSibling.nextElementSibling.classList.add('btn-wrong')
    question3.firstElementChild.classList.add('btn-success')
    const next = document.querySelector('#next3')
    next.classList.remove('disable')
})

question4.lastElementChild.addEventListener('click', ()=>{
    question4.lastElementChild.classList.add('btn-success')
    score+=mark   
    console.log(score)
    const next = document.querySelector('#next4')
    next.classList.remove('disable')
    result.innerHTML = `<p class="score">${score}</p>`
})

question4.firstElementChild.addEventListener('click', ()=>{
    question4.firstElementChild.classList.add('btn-wrong')
    question4.lastElementChild.classList.add('btn-success')
    const next = document.querySelector('#next4')
    next.classList.remove('disable')
})

question4.firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', ()=>{
    question4.firstElementChild.nextElementSibling.nextElementSibling.classList.add('btn-wrong')
    question4.lastElementChild.classList.add('btn-success')
    const next = document.querySelector('#next4')
    next.classList.remove('disable')
})

question5.lastElementChild.addEventListener('click', ()=>{
    question5.lastElementChild.classList.add('btn-success')
    score+=mark   
    console.log(score)
    const next = document.querySelector('#next5')
    next.classList.remove('disable')
    result.innerHTML = `<p class="score">${score}</p>`
})

question5.firstElementChild.addEventListener('click', ()=>{
    question5.firstElementChild.classList.add('btn-wrong')
    question5.lastElementChild.classList.add('btn-success')
    const next = document.querySelector('#next5')
    next.classList.remove('disable')
})

question5.firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', ()=>{
    question5.firstElementChild.nextElementSibling.nextElementSibling.classList.add('btn-wrong')
    question5.lastElementChild.classList.add('btn-success')
    const next = document.querySelector('#next5')
    next.classList.remove('disable')
})

// console.log(score)

// console.log(result)

// if(score >= 75 ){
//     message.textContent = "You scored an A grade! You Passed!"
// }else if(score >= 50 < 75){
//     message.textContent = "You scored a B grade! You did well, but you can do better next time!"
// }else if(score >= 25 < 50){
//     message.textContent = "You scored a C grade! You should pay attention to questions!"
// }else{
//     message.textContent = "You scored F! You Failled your generation and you should not be allowed to live!"
// }