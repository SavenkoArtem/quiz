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

    
    
}