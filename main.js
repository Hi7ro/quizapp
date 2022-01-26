"use strict"

let questions = [

  {
    "question": "Welchen der folgenden Programiersprachen-Typen gibt es NICHT?",
    "answer_1": "Interaktive-Sprachen",
    "answer_2": "Interpreter-Sprache",
    "answer_3": "Objekorientierte Programmiersprache",
    "answer_4": "Compiler-Sprache",
    "right_answer": 1
  },

  {
    "question": "Welche der folgenden Sprachen wird vor der Ausführung kompiliert?",
    "answer_1": "Batch",
    "answer_2": "Python",
    "answer_3": "JavaScript",
    "answer_4": "C++",
    "right_answer": 4
  },

  {
    "question": "Eine \"switch case\"-Sruktur ist im Verwendungszweck am ehesten verwandt mit...",
    "answer_1": "If/else",
    "answer_2": "Class",
    "answer_3": "Foreach",
    "answer_4": "While",
    "right_answer": 1
  },

  {
    "question": "Ein Semikolon (;) ist in vielen Programmiersprachen wichtig um eine Zeile/Anweisung abzuschließen. Nicht jedoch in...",
    "answer_1": "JavaScript",
    "answer_2": "Python",
    "answer_3": "C++",
    "answer_4": "Java",
    "right_answer": 2
  },

  {
    "question": "Die meisten diser Begriffe stehen in direkter Verbindung zu Funktionen. Welcher Nicht?",
    "answer_1": "Rückgabewert",
    "answer_2": "Public/private",
    "answer_3": "Argument",
    "answer_4": "Destruktor",
    "right_answer": 4
  }
];
let currentQuestion = 0;
let rightAnswers = 0;

function $(id) {
  return document.getElementById(id); // to shorten the document.get.. instead write $('id')
}

function init() {
  $('questionsEnd').innerHTML = questions.length;
  showQuestion();
  endScreen();
}

function showQuestion() {
  let question = questions[currentQuestion]; // From Object the first object 0

  if (currentQuestion >= questions.length) {
    $('endScreen').style = "";
    $('quizBody').style = "display: none;"
    $('quizImg').src = './img/trophy.png';
  } else {
    $('questionNumber').innerHTML = currentQuestion + 1;
    $('question').innerHTML = question['question']; // DOM Element, First question = the first Object/object keyword 'question'
    $('answer_1').innerHTML = question['answer_1'];
    $('answer_2').innerHTML = question['answer_2'];
    $('answer_3').innerHTML = question['answer_3'];
    $('answer_4').innerHTML = question['answer_4'];
  };

  $('questionNumberAnswerd').innerHTML = rightAnswers;
  $('fromQuestions').innerHTML = questions.length;
}

function answer(selection) { // answer that you choose
  //todo: show right answer only when u got 2 wrong answers
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idRightAnswer = `answer_${question['right_answer']}`;

  if (selectedQuestionNumber == question['right_answer']) {
    $(selection).parentNode.classList.add('bg-success');
    rightAnswers++;
  } else {
    $(selection).parentNode.classList.add('bg-danger');
    $(idRightAnswer).parentNode.classList.add('bg-success');
  }
  $('button').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  resetAnswers();
  showQuestion();
  $('button').disabled = true;
}

function resetAnswers() {
  $('answer_1').parentNode.classList.remove('bg-success');
  $('answer_1').parentNode.classList.remove('bg-danger');
  $('answer_2').parentNode.classList.remove('bg-success');
  $('answer_2').parentNode.classList.remove('bg-danger');
  $('answer_3').parentNode.classList.remove('bg-success');
  $('answer_3').parentNode.classList.remove('bg-danger');
  $('answer_4').parentNode.classList.remove('bg-success');
  $('answer_4').parentNode.classList.remove('bg-danger');
}

function endScreen() {

}