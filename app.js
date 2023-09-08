// Counties data
const counties = [
    {
        flagSrc: 'bomi.jpeg',
        answer: 'Bomi',
        options: ['Marry Land', 'Lofa', 'Bomi', 'Grand Gedeh'],
    },

    {
        flagSrc: 'bong.jpeg',
        answer: 'Bong',
        options: ['Sinoe', 'Bong', 'Grand Kru', 'Margibi'],
    },

    {
        flagSrc: 'gbarpolu.jpeg',
        answer: 'Gbarpolu',
        options: ['Lofa', 'Bong', 'Sinoe', 'Gbarpolu'],
    },

    {
        flagSrc: 'grand-bassa.jpeg',
        answer: 'Grand Bassa',
        options: ['Lofa', 'Grand Bassa', 'Sinoe', 'Nimba'],
    },

    {
        flagSrc: 'grand-cape-mount.jpeg',
        answer: 'Cape Mount',
        options: ['River Gee', 'Bong', 'Cape Mount', 'Margibi'],
    },

    {
        flagSrc: 'grand-gedeh.jpeg',
        answer: 'Grand Gedeh',
        options: ['Grand Gedeh', 'Nimba', 'Lofa', 'Montserrado'],
    },

    {
        flagSrc: 'grand-kru.jpeg',
        answer: 'Grand Kru',
        options: ['Lofa', 'Bong', 'Sinoe', 'Grand Kru'],
    },

    {
        flagSrc: 'lofa.jpeg',
        answer: 'Lofa',
        options: ['Lofa', 'Nimba', 'Grand Gedeh', 'Cape Mount'],
    },

    {
        flagSrc: 'margibi.jpeg',
        answer: 'Margibi',
        options: ['Lofa', 'Bong', 'Sinoe', 'Margibi'],
    },

    {
        flagSrc: 'maryland.jpeg',
        answer: 'Maryland',
        options: ['Nimba', 'Bong', 'Maryland', 'Sinoe'],
    },

    {
        flagSrc: 'montserrado.jpeg',
        answer: 'Montserrado',
        options: ['Grand Kru', 'Bong', 'Sinoe', 'Montserrado'],
    },

    {
        flagSrc: 'nimba.jpeg',
        answer: 'Nimba',
        options: ['Nimba', 'Bong', 'Sinoe', 'Montserrado'],
    },

    {
        flagSrc: 'river-cess.jpeg',
        answer: 'River Cess',
        options: ['Grand Kru', 'Sinoe', 'River Cess', 'Margibi'],
    },

    {
        flagSrc: 'river-gee.jpeg',
        answer: 'River Gee',
        options: ['River Cess', 'Nimba', 'Sinoe', 'River Gee'],
    },

    {
        flagSrc: 'Sinoe.jpeg',
        answer: 'Sinoe',
        options: ['Lofa', 'Bong', 'Sinoe', 'Grand Kru'],
    }
   
];

//Function to mix the counties
function mixCounties(array) {
    for (let i = array.length - 1; i > 0; i--) {
       
        const randomIndex = Math.floor(Math.random() * (i + 1));

        //setting a temporary note for our last county in the list
        const temp = array[i];

        //swapping our counties. Replacing last county with a random county. 
        array[i] = array[randomIndex];

        //putting the last county where the random county we picked was.
        array[randomIndex] = temp;
    }
}


let score = 0;
let timer;
let seconds = 180;
let currentCountyIndex = 0;
function startGame() {
   
    mixCounties(counties);
    currentCountyIndex = 0; 
    loadNextFlag();
    startTimer();
}

// Function to load a new flag and options
function loadNextFlag() {

	// Check if we haven't reached the end of our list of counties yet.
    if (currentCountyIndex < counties.length) {

    	//Take the current position (index) from our special 
    	//counter 'currentCountyIndex' and using it to find the county in our list of counties (called counties).
        const currentCounty = counties[currentCountyIndex];

        // grabbing a special spot on our screen (an HTML element) where we want to show the flag. 
        const flagImage = document.getElementById('flag');

        // putting the flag of the current county into our special spot (the flagImage).
        flagImage.src = currentCounty.flagSrc;

        //finding a special place in our HTML document with the ID 'options' and giving it
        //a name called optionsContainer.
        const optionsContainer = document.getElementById('options');

        // taking out everything that was already in the box so that 
        //we can put new things in it.
        optionsContainer.innerHTML = '';

        //loop through each answer option for the current county. 
        currentCounty.options.forEach(function (option) {

        	//create a "button" for each answer option. 
            const button = document.createElement('button');

            //set the answer choice on the button.
            button.innerText = option;

            //add an event listener to the button.
            button.addEventListener('click', function () {

            	//when the button is clicked, we call a function called 
            	//checkAnswer and give it the current answer option as a parameter.
                checkAnswer(option);
            });

            //put the button (with the answer choice on it) in 'optionsContainer'
            //so user can see and choose their option
            optionsContainer.appendChild(button);
        });
    } else {

    	//end the game if the condition in the if statement above is not true 
        endGame();
    }
}

// Function to check the user's answer
function checkAnswer(selectedAnswer) {

	//get the current country (the one currently being shown)
	// based on the currentCountyIndex. 
    const currentCounty = counties[currentCountyIndex];

    //compare user option to correct answer
    if (selectedAnswer === currentCounty.answer) {
        
        //display feedback if answer is correct
        displayFeedback('Correct', '😃', 'green');
    } else {
    	//display feedback if answer is wrong
        displayFeedback('Wrong', '😠', 'red');
    }

    //After checking the answer, move on to the next county in the list 
    //by increasing the currentCountyIndex by 1.
    currentCountyIndex++;

    //load the flag and options of next county
    loadNextFlag();
}

// Function to display feedback to the user

//defines a function called displayFeedback that takes three 
//pieces of information as input: text, emoji, and textColor.
function displayFeedback(text, emoji, textColor) {

	// finding a special spot in our HTML document with the 
	//ID 'feedback' and giving it a name called feedback. 
    const feedback = document.getElementById('feedback');

    // erasing whatever was written or displayed there before. 
    feedback.innerHTML = ''; 

    // Create a <div> element for the feedback message
    const feedbackDiv = document.createElement('div');
    feedbackDiv.style.display = 'inline-block';
    feedbackDiv.style.color = textColor;

    // Create a <span> element for the emoji
    const emojiSpan = document.createElement('span');
    emojiSpan.style.fontSize = '2rem';
    emojiSpan.textContent = emoji;

    // Set the text content of the feedback message
    feedbackDiv.textContent = text;

    // Append the emoji span to the feedback message div
    feedbackDiv.appendChild(emojiSpan);

    // Append the feedback message div to the 'feedback' element
    feedback.appendChild(feedbackDiv);
}



// Function to restart the game
function restartGame() {
	const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';

    score = 0;
    seconds = 180;
    currentCountyIndex = 0;
    startGame();
}

document.addEventListener('DOMContentLoaded', function () {
document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', restartGame);
});



//Function to show game page and hide home page 
function play() {
	document.getElementById("home-page").style.display = "none"
	document.getElementById("game-page").style.display = "block"
}

//Function to hide game page and show home page
function goHome() {
    document.getElementById("home-page").style.display = "block";
    document.getElementById("game-page").style.display = "none";
}

// Initial setup, hide the game page
document.getElementById('game-page').style.display = 'none';


