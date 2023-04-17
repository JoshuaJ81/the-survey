//use if else statments, along with other js syntax to create logical QA form. Refer to conditional statements lesson. 

let answerButton = document.querySelector('.btn');
let scoreButton = document.querySelector('.score-btn');
let scoreDiv = document.querySelector('.score');
let answerDiv = document.querySelector('.input');
let answerBox = document.querySelector('.answer-box');
const nextButton = document.querySelector('.nxt-btn');
const nextInput = document.querySelector('.nxt-input');
const rightAnswer = 24;
const wrongAnswer = 2;
const totalScore = 100;

answerButton.addEventListener('click', function(){
    const answer = document.querySelector('input.answer-box').value.toLowerCase();

    
    

    if(answer === 'los angeles') {
        alert ('SERIOUSLY? WRONG ANSWER!');
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } else if(answer === 'sacramento') {
        alert ('YOU ARE CORRECT!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        rightAnswer++;
    } else if (answer === 'oakland') {
        alert ('THAT IS NOT QUITE THE ANSWER. KEEP GOING');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } else if (answer === 'san francisco') {
        alert ('WRONG ANSWER. NOT EVEN CLOSE!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    }

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
    } 
    
    if(answer === 'moon') {
        alert ('SERIOUSLY? WRONG ANSWER!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } else if(answer === 'sun') {
        alert ('YOU ARE CORRECT!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        rightAnswer++;
    } else if (answer === 'saturn') {
        alert ('THAT IS NOT QUITE THE ANSWER. KEEP GOING');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } else if (answer === 'jupiter') {
        alert ('WRONG ANSWER. NOT EVEN CLOSE!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } 

    if(answer === 'oba oduduwa') {
        alert ('SERIOUSLY? WRONG ANSWER!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } else if(answer === 'sundiata keita') {
        alert ('YOU ARE CORRECT!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        rightAnswer++;
    } else if (answer === 'shaka zulu') {
        alert ('THAT IS NOT QUITE THE ANSWER. KEEP GOING');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } else if (answer === 'mansa musa') {
        alert ('WRONG ANSWER. NOT EVEN CLOSE!');
        
        nextButton.style.display = 'block';
        nextInput.style.display = 'block';
        answerButton.style.display = 'none';
        wrongAnswer--;
    } else {
        alert ('PLEASE PROVIDE AN ANSWER.');
    }
    


});







//scoreButton.addEventListener('click', function(){
    
    //const total = rightAnswer - wrongAnswer;

    //if (total >= 100) {
        //return total;
    //} else if (total < 25) {
        //alert ('not enough');
    //}


    //});


  