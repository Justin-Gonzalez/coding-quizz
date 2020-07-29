
const startButton= document.getElementById("startbutton");
const answerButton = document.getElementById("answer-buttons");
const intro= document.getElementById("intro");
const questions= [
    {
        question: "which is used to stylize a page?",
        answer: [
            
                {text:"html", correct: false},
                {text:"css", correct: true},
                {text:"javascript", correct: false},
                {text:"C++", correct: false},
            
            ]
    }
]

startButton.onclick = function timer(){
    startButton.classList.add("hide")
    intro.classList.add("hide")
    answerButton.classList.remove("hide")

   
    

    
}

