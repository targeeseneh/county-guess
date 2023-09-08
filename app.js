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

        const temp = array[i];
        array[i] = array[randomIndex];
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
    if (currentCountyIndex < counties.length) {
        const currentCounty = counties[currentCountyIndex];
        const flagImage = document.getElementById('flag');
        flagImage.src = currentCounty.flagSrc;

        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';

        currentCounty.options.forEach(function (option) {
            const button = document.createElement('button');
            button.innerText = option;
            button.addEventListener('click', function () {
                checkAnswer(option);
            });
            optionsContainer.appendChild(button);
        });
    } else {
        endGame();
    }
}

// Function to check the user's answer
function checkAnswer(selectedAnswer) {
    const currentCounty = counties[currentCountyIndex];
    if (selectedAnswer === currentCounty.answer) {
        score++;
        displayFeedback('Correct', '😃', 'green');
    } else {
        displayFeedback('Wrong', '😠', 'red');
    }

    currentCountyIndex++;
    loadNextFlag();
}

// Function to display feedback to the user
function displayFeedback(text, emoji, textColor) {
    const feedback = document.getElementById('feedback');
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
