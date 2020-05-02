let username = function username(){
    let name = document.querySelector('input').value
    return name
}

const submit = document.querySelector('.submit')

submit.addEventListener('click', ()=>{
    const user = document.querySelector('#username')
    user.textContent = username()
})

const submittedAns = document.querySelector('.submitAns')
const userAnswer = [];