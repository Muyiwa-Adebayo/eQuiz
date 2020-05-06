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
let result = document.querySelector('#score')

let score1 = document.querySelector('#score1')
let score2 = document.querySelector('#score2')
let score3 = document.querySelector('#score3')
let score4 = document.querySelector('#score4')
let score5 = document.querySelector('#score5')

const message = document.querySelector('#message')

let score = 0;
let mark = 20;
let counter =  0;
let count = 1;

question1.firstElementChild.addEventListener('click', ()=>{
    question1.firstElementChild.classList.add('btn-success')
    score+=mark
    counter+=count
    score1.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 1 questions</p>`
    console.log(score)
    const next = document.querySelector('#next1')
    next.classList.remove('disable')
    question1.style.pointerEvents = 'none';
})

question1.lastElementChild.addEventListener('click', ()=>{
    question1.lastElementChild.classList.add('btn-wrong')
    question1.firstElementChild.classList.add('btn-success')
    const next = document.querySelector('#next1')
    next.classList.remove('disable')
    score1.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 1 questions</p>`
    question1.style.pointerEvents = 'none';
})

question1.firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', ()=>{
    question1.firstElementChild.nextElementSibling.nextElementSibling.classList.add('btn-wrong')
    question1.firstElementChild.classList.add('btn-success')
    const next = document.querySelector('#next1')
    next.classList.remove('disable')
    score1.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 1 questions</p>`
    question1.style.pointerEvents = 'none';
})

question2b.addEventListener('click', ()=>{
    question2b.classList.add('btn-success')
    score+=mark
    counter+=count
    score2.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 2 questions</p>`
    console.log(score)
    const next = document.querySelector('#next2')
    next.classList.remove('disable')
    question2.style.pointerEvents = 'none';
})

question2.lastElementChild.addEventListener('click', ()=>{
    question2.lastElementChild.classList.add('btn-wrong')
    question2b.classList.add('btn-success')
    const next = document.querySelector('#next2')
    next.classList.remove('disable')
    score2.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 2 questions</p>`
    question2.style.pointerEvents = 'none';
})

question2.firstElementChild.addEventListener('click', ()=>{
    question2.firstElementChild.classList.add('btn-wrong')
    question2b.classList.add('btn-success')
    const next = document.querySelector('#next2')
    next.classList.remove('disable')
    score2.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 2 questions</p>`
    question2.style.pointerEvents = 'none';
})

question3.firstElementChild.addEventListener('click', ()=>{
    question3.firstElementChild.classList.add('btn-success')
    score+=mark
    counter+=count
    score3.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 3 questions</p>`
    console.log(score)
    const next = document.querySelector('#next3')
    next.classList.remove('disable')
    question3.style.pointerEvents = 'none';
})

question3.lastElementChild.addEventListener('click', ()=>{
    question3.lastElementChild.classList.add('btn-wrong')
    question3.firstElementChild.classList.add('btn-success')
    const next = document.querySelector('#next3')
    next.classList.remove('disable')
    score3.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 3 questions</p>`
    question3.style.pointerEvents = 'none';
})

question3.firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', ()=>{
    question3.firstElementChild.nextElementSibling.nextElementSibling.classList.add('btn-wrong')
    question3.firstElementChild.classList.add('btn-success')
    const next = document.querySelector('#next3')
    next.classList.remove('disable')
    score3.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 3 questions</p>`
    question3.style.pointerEvents = 'none';
})

question4.lastElementChild.addEventListener('click', ()=>{
    question4.lastElementChild.classList.add('btn-success')
    score+=mark
    counter+=count   
    console.log(score)
    const next = document.querySelector('#next4')
    next.classList.remove('disable')
    score4.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 4 questions</p>`
    question4.style.pointerEvents = 'none';
})

question4.firstElementChild.addEventListener('click', ()=>{
    question4.firstElementChild.classList.add('btn-wrong')
    question4.lastElementChild.classList.add('btn-success')
    const next = document.querySelector('#next4')
    next.classList.remove('disable')
    score4.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 4 questions</p>`
    question4.style.pointerEvents = 'none';
})

question4.firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', ()=>{
    question4.firstElementChild.nextElementSibling.nextElementSibling.classList.add('btn-wrong')
    question4.lastElementChild.classList.add('btn-success')
    const next = document.querySelector('#next4')
    next.classList.remove('disable')
    score4.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 4 questions</p>`
    question4.style.pointerEvents = 'none';
})

question5.lastElementChild.addEventListener('click', ()=>{
    question5.lastElementChild.classList.add('btn-success')
    score+=mark
    counter+=count   
    console.log(score)
    const next = document.querySelector('#next5')
    next.classList.remove('disable')
    score5.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 5 questions</p>`
    result.innerHTML = `<p>${score}</p>`
    question5.style.pointerEvents = 'none';
})

question5.firstElementChild.addEventListener('click', ()=>{
    question5.firstElementChild.classList.add('btn-wrong')
    question5.lastElementChild.classList.add('btn-success')
    const next = document.querySelector('#next5')
    next.classList.remove('disable')
    score5.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 5 questions</p>`
    result.innerHTML = `<p>${score}</p>`
    question5.style.pointerEvents = 'none';
})

question5.firstElementChild.nextElementSibling.nextElementSibling.addEventListener('click', ()=>{
    question5.firstElementChild.nextElementSibling.nextElementSibling.classList.add('btn-wrong')
    question5.lastElementChild.classList.add('btn-success')
    const next = document.querySelector('#next5')
    next.classList.remove('disable')
    score5.innerHTML = `<p>scoreboard: <span class="score-board">20</span></p>
    <p>You've answered correctly <strong>${counter}</strong> out of 5 questions</p>`
    result.innerHTML = `<p>${score}</p>`
    question5.style.pointerEvents = 'none';
})

result.textContent= `${score}`

// message.textContent = `You answered ${counter} out of 5 questions`

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

// console.log(question4.style)