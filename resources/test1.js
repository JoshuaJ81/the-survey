//use if else statments, along with other js syntax to create logical QA form. Refer to conditional statements lesson. 

const answerButton = document.querySelector('.btn');
const answerDiv = document.querySelector('.input');
const answerBox = document.querySelector('.answer-box');
const nextButton = document.querySelector('.nxt-btn');
const nextInput = document.querySelector('.nxt-input');
const rightAnswer = 24;
const wrongAnswer = 2;


answerButton.addEventListener('click', function(){
    const answer = document.querySelector('input.answer-box').value;

    if(answer === 'john sebastian') {
        alert ('SERIOUSLY? WRONG ANSWER!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } else if(answer === 'jimi hendrix') {
        alert ('YOU ARE CORRECT!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        rightAnswer++;
    } else if (answer === 'sly and the family stone') {
        alert ('THAT IS NOT QUITE THE ANSWER. KEEP GOING');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } else if (answer === 'the grateful dead') {
        alert ('WRONG ANSWER. NOT EVEN CLOSE!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } else {
        alert ('PLEASE PROVIDE AN ANSWER.');
    }


});

