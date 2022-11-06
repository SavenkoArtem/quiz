const questions = [
    {
        question: "What programs language work in browsers?",
        answers: ["java", "C", "Python", "JavaScript"],
        correct: 4,
    },
    {
        question: "What does CSS mean?",
        answers: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Saiboats",
        ],
        correct: 2,
    },
    {
        question: "What does HTML mean?",
        answers: [
            "Hypertext Markup Language",
            "Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "What year JavaScript create?",
		answers: ["1996", "1995", "1994", "all answers"],
		correct: 2,
	},    
];

// find elements
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit')

// game variables
let score = 0;
let questionIndex = 0;

clearPage()
showQuestion()
submitBtn.onclick = checkAnswer;

function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
};


function showQuestion(){
    
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);

    headerContainer.innerHTML = title;

    for ([index, answerText] of questions[questionIndex]['answers'].entries()) {
        
        const optionAnswerTemplate = `
        <li>
            <label>
                <input value="%numberAnswer%" type="radio" class="answer" name="answer" />
                <span>%answer%</span>
            </label>
        </li>
        `
        const answerHTML = optionAnswerTemplate
                                .replace('%answer%', answerText)
                                .replace('%numberAnswer%', index + 1);

        listContainer.innerHTML += answerHTML;
    }

}

function checkAnswer(){    

    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

    if (!checkedRadio) {
        submitBtn.blur();
        return
    }

    const userAnswer = parseInt(checkedRadio.value);
    
    if (userAnswer === questions[questionIndex]['correct']) {
        score++;        
    }
    console.log('score', score);

    if (questions.length !== questionIndex + 1) {
        console.log('Not last question');
        questionIndex++;
        clearPage()
        showQuestion()
        return;
    } else {
        console.log('This is last question');
        clearPage();
        showResults();
    }
    
}


function showResults(){
    console.log('showResults started');
    console.log(score)

    const resultTemplate = `
        <h2 class="title">%title%</h2>
        <h3 class="summary">%message%</h3>
        <p class="result">%result%</p>
    `;

    let title, message;

    if (score === questions.length) {
        title = 'Congratulate!';
        message = 'You answered all the questions correctly!';
    } else if ((score * 100)/questions.length >= 50) {
        title = 'Not bad';
        message = 'They gave out more than half of the correct answers!';
    } else {
        title = 'It\'s worth trying';
        message = 'So far you have less than half of the correct results';
    }

    let result = `${score} - ${questions.length}`;

    const finalMessage = resultTemplate
                            .replace('%title%', title)
                            .replace('%message%', message)
                            .replace('%result%', result)

    headerContainer.innerHTML = finalMessage;
}