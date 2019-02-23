$(document).ready(function(){

//Set up an array of questions


var myQuestions = [
    {
        question: "This 1995 cult classic film served as direct inspiration for The Wachowskis in the creation of The Matrix:",
        answers: ["Trigun", "Ghost in the Shell", "Gundam Wing", "Zoids",],
        correctAnswer: "Ghost in the Shell"
    },
    {
        question: "Which Studio Ghibli movie saw Christian Bale playing a lead role?",
        answers: ["Howl's Moving Castle", "Spirited Away", "Ponyo", "Princess Mononoke",],
        correctAnswer: "Howl's Moving Castle"
    },
    {
        question: " This space noir series features characters such as Spike Spiegel, Jet and Faye Valentine: ",
        answers: ["Ghost in the Shell: SAC", "Cowboy Bebop", "Eureka 7", "Speed Racer",],
        correctAnswer: "Cowboy Bebop"
    },
    {
        question: "This anime only had 6 original episodes, but became well loved for it's wacky style and catchy soundtrack:",
        answers: ["FLCL", "My Hero Academia", "Naurto", "One Piece",],
        correctAnswer: "FLCL"
    },
    {
        question: "This dark, gritty cyberpunk movie about teen bike gangs is one of the most well known and loved anime films: ",
        answers: ["Bleach", "Nausica of the Valley of the Wind", "Grave of the Fireflies", "Akira",],
        correctAnswer: "Akira"
    },
    {
        question: " Featuring characters such as Goku and Vegeta, this is arguably the most well known anime series of all time:",
        answers: ["Bleach", "Naruto", "Dragon Ball", "Pokemon",],
        correctAnswer: "Dragon Ball"
    },
    {
        question: "This afternoon programing block on Cartoon Network played a huge roll in introducing anime to young people:",
        answers: ["Anime Power Hour", "Toonami", "Action Afternoons", "Animation Domination",],
        correctAnswer: "Toonami"
    },
     {
        question: "This anime turns the Mecha style on it's head, throwing it's main characters into deeply troubling psychological dilemmas:",
        answers: ["Neon Genesis Evangelion", "Gundam Wing", "Zoids: Chaotic Century", "MechWarrior",],
        correctAnswer: "Neon Genesis Evangelion"
    },
    
]

});
//Declaring varibles for the counters

var correctCount = 0;
var incorrectCount = 0;
var unanswered = 0;
var timeLeft = 120;

//Landing page with start button, which leads to main page

//Start Timer
function setup() {
    var timer = $("#timer");
    timer.html
}
//Dynamically generating questions and answers

//Setting up event listeners (event delegation)

// Display results page

//Reset page without refreshing