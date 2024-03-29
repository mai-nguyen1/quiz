const unclearedQuestionsKey = "uncleared_questions";

var questionLists = [];

var chosenQuestions = [];
var unclearedQuestions = [];
var remainingQuestions = [];

const startCard = document.querySelector("#start-card");
const questionCard = document.querySelector("#question-card");
const scoreCard = document.querySelector("#score-card");
const leaderboardCard = document.querySelector("#leaderboard-card");
var score = 0;
var delay = 1000;
var etag = 0;

var correctAns = [];
var wrongAns = [];
const currentAns = new Set();

window.addEventListener("DOMContentLoaded", () => {
  loadUnclearedQuestions();
  updateRewindBtn();
});

function hideCards() {
  startCard.setAttribute("hidden", true);
  questionCard.setAttribute("hidden", true);
  scoreCard.setAttribute("hidden", true);
  leaderboardCard.setAttribute("hidden", true);
}

const resultDiv = document.querySelector("#result-div");
const resultText = document.querySelector("#result-text");

//hide result div
function hideResultText() {
  resultDiv.style.display = "none";
}

//these variables are required globally
var intervalID;
var time;
var currentQuestion;

document.querySelector("#start-button").addEventListener("click", startQuiz);

function startQuiz(event, rewinded = false) {
  etag = Date.now();
  chosenQuestions = shuffle(chosenQuestions);

  //hide any visible cards, show the question card
  hideCards();
  questionCard.removeAttribute("hidden");

  //assign 0 to currentQuestion when start button is clicked, then display the current question on the page
  currentQuestion = 0;
  displayQuestion();

  //set total time depending on number of questions
  time = chosenQuestions.length * 135;
  score = 0;

  //executes function "countdown" every 1000ms to update time and display on page
  intervalID = setInterval(countdown, 1000);

  //invoke displayTime here to ensure time appears on the page as soon as the start button is clicked, not after 1 second
  displayTime();
  const delayElem = document.querySelector("#delay");
  const currentDelay = Number(delayElem.value) * 1000;
  if (!isNaN(currentDelay) && currentDelay > 1000) {
    delay = currentDelay;
  }
}

//reduce time by 1 and display new value, if time runs out then end quiz
function countdown() {
  time--;
  displayTime();
  if (time < 1) {
    endQuiz();
  }
}

//display time on page
const timeDisplay = document.querySelector("#time");
function displayTime() {
  timeDisplay.textContent = time;
}

//display the question and answer options for the current question
function displayQuestion() {
  if (chosenQuestions.length < 1) {
    getQuestions();
  }
  cleanup();
  let question = chosenQuestions[currentQuestion];
  document.querySelector("#question-number").innerText = `${
    currentQuestion + 1
  }/${chosenQuestions.length}`;
  document.querySelector("#question-text").innerText = question.questionText;
  document.querySelector("#caption").innerText = question.questionHint;
  correctAns = question.correctAns.filter((v) => v.length > 0);
  wrongAns = question.wrongAns.filter((v) => v.length > 0);
  const allAns = correctAns.concat(wrongAns);
  shuffle(allAns);
  for (let i = 0; i < allAns.length; i++) {
    document.querySelector("#option" + i).innerText = allAns[i];
  }
  for (let i = 0; i < 5; i++) {
    const btn = document.querySelector("#option" + i);
    if (btn.innerText.length <= 0) {
      btn.style.display = "none";
    } else {
      btn.style.display = "block";
    }
  }
}

//behaviour when an answer button is clicked: click event bubbles up to div with id "quiz-options"
//eventObject.target identifies the specific button element that was clicked on
// document.querySelector("#quiz-options").addEventListener("click", checkAnswer);

//Compare the text content of the option button with the answer to the current question
function optionIsCorrect() {
  return (
    correctAns.length == currentAns.size &&
    correctAns.every((v) => currentAns.has(v))
  );
}

//if answer is incorrect, penalise time
function checkAnswer(eventObject) {
  eventObject.disabled = true;
  const nextQuestion = function () {
    currentQuestion++;
    eventObject.innerText = "Check Answer";
    hideResultText();
    if (currentQuestion < chosenQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
    eventObject.disabled = false;
  };
  const label = eventObject.innerText;
  if (label.startsWith("Skip")) {
    nextQuestion();
    return;
  }
  resultDiv.style.display = "block";
  if (optionIsCorrect()) {
    resultText.textContent = "Correct!";
    score++;
  } else {
    resultText.textContent = "Incorrect!";
    unclearedQuestions.push(chosenQuestions[currentQuestion]);
  }
  for (let i = 0; i < 5; i++) {
    const btn = document.querySelector("#option" + i);
    btn.classList.remove("chosen");
    if (correctAns.includes(btn.innerText)) {
      btn.classList.add("right");
    } else {
      btn.classList.add("wrong");
    }
  }
  const f = function (t = 0, currentEtag = 0, cq = 0) {
    if (currentQuestion !== cq || currentEtag !== etag) {
      return; // shut the count down
    }
    if (t <= 0) {
      nextQuestion();
      return;
    }
    eventObject.innerText = `Skip (${t / 1000})`;
    setTimeout(() => f(t - 1000, currentEtag, cq), t > 1000 ? 1000 : t);
  };
  f(delay, etag, currentQuestion);
  eventObject.disabled = false;
}

//display scorecard and hide other divs
const scoreElem = document.querySelector("#score");

//at end of quiz, clear the timer, hide any visible cards and display the scorecard and display the score as the remaining time
function endQuiz() {
  clearInterval(intervalID);
  hideCards();
  scoreCard.removeAttribute("hidden");
  scoreElem.textContent = score;
  saveUnclearedQuestions();
}

const submitButton = document.querySelector("#submit-button");
const inputElement = document.querySelector("#initials");

//store user initials and score when submit button is clicked
submitButton.addEventListener("click", storeScore);

function storeScore(event) {
  //prevent default behaviour of form submission
  event.preventDefault();

  //check for input
  if (!inputElement.value) {
    alert("Please enter your initials before pressing submit!");
    return;
  }

  //store score and initials in an object
  let leaderboardItem = {
    initials: inputElement.value,
    score: score,
    total: chosenQuestions.length,
  };

  updateStoredLeaderboard(leaderboardItem);

  //hide the question card, display the leaderboardcard
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  renderLeaderboard();
}

//updates the leaderboard stored in local storage
function updateStoredLeaderboard(leaderboardItem) {
  let leaderboardArray = getLeaderboard();
  //append new leaderboard item to leaderboard array
  leaderboardArray.push(leaderboardItem);
  localStorage.setItem("leaderboardArray", JSON.stringify(leaderboardArray));
}

//get "leaderboardArray" from local storage (if it exists) and parse it into a javascript object using JSON.parse
function getLeaderboard() {
  let storedLeaderboard = localStorage.getItem("leaderboardArray");
  if (storedLeaderboard !== null) {
    let leaderboardArray = JSON.parse(storedLeaderboard);
    return leaderboardArray;
  } else {
    leaderboardArray = [];
  }
  return leaderboardArray;
}

//display leaderboard on leaderboard card
function renderLeaderboard() {
  let sortedLeaderboardArray = sortLeaderboard();
  const highscoreList = document.querySelector("#highscore-list");
  highscoreList.innerHTML = "";
  for (let i = 0; i < sortedLeaderboardArray.length; i++) {
    let leaderboardEntry = sortedLeaderboardArray[i];
    let newListItem = document.createElement("li");
    newListItem.textContent = `${leaderboardEntry.initials} - ${leaderboardEntry.score}/${leaderboardEntry.total}`;
    highscoreList.append(newListItem);
  }
}

//sort leaderboard array from highest to lowest
function sortLeaderboard() {
  let leaderboardArray = getLeaderboard();
  if (!leaderboardArray) {
    return;
  }

  leaderboardArray.sort(function (a, b) {
    return b.score - a.score;
  });
  return leaderboardArray;
}

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearHighscores);

//clear local storage and display empty leaderboard
function clearHighscores() {
  localStorage.removeItem("leaderboardArray");
  renderLeaderboard();
  unclearedQuestions = [];
}

const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", returnToStart);

//Hide leaderboard card show start card
function returnToStart() {
  hideCards();
  updateRewindBtn();
  const remainingBtn = document.querySelector("#remaining");
  const remaining = remainingQuestions.length;
  remainingBtn.disabled = remaining < 1;
  remainingBtn.innerText = `Remaing (${remaining})`;

  startCard.removeAttribute("hidden");
}

//use link to view highscores from any point on the page
const leaderboardLink = document.querySelector("#leaderboard-link");
leaderboardLink.addEventListener("click", showLeaderboard);

function showLeaderboard() {
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  //stop countdown
  clearInterval(intervalID);

  //assign undefined to time and display that, so that time does not appear on page
  time = undefined;
  displayTime();

  //display leaderboard on leaderboard card
  renderLeaderboard();
}

function onChoose(elem) {
  const key = elem.innerText;
  if (!key || key.length == 0) {
    return;
  }
  console.log(key);
  if (currentAns.has(key)) {
    currentAns.delete(key);
  } else {
    currentAns.add(key);
  }
  for (let i = 0; i < 5; i++) {
    const btn = document.querySelector("#option" + i);
    if (btn) {
      const text = btn.innerText;
      if (currentAns.has(text)) {
        if (!btn.classList.contains("chosen")) btn.classList.add("chosen");
      } else {
        btn.classList.remove("chosen");
      }
    }
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function cleanup() {
  for (let i = 0; i < 5; i++) {
    const btn = document.querySelector("#option" + i);
    btn.innerText = "";
    btn.style.display = "block";
    btn.classList.remove("chosen");
    btn.classList.remove("right");
    btn.classList.remove("wrong");
  }
  currentAns.clear();
  correctAns = [];
  wrongAns = [];
  document.querySelector("#check").innerText = "Check Answer";
}

function rewind() {
  console.log("uncleared questions:" + unclearedQuestions);
  chosenQuestions = unclearedQuestions.map((v) => v);
  //unclearedQuestions = [];
  if (chosenQuestions.length > 0) startQuiz(null, true);
}

function remaining() {
  console.log("remaining questions:" + remainingQuestions);
  getQuestions(true);
  if (chosenQuestions.length > 0) startQuiz(null, false);
}

function getQuestions(remaining = false) {
  /*const chosen = Math.floor(Math.random() * questionLists.length);
  //const chosenList = questionLists[chosen];
  chosenList = [...questions00, ...questions01, ...questions02];
  console.log("questions", chosenList);
  chosenQuestions = chosenList.map((v) => v); // clone

  const key = 'questionText';
  const unique = [...new Map(chosenQuestions.map(item => [item[key], item])).values()];
  console.log(JSON.stringify(unique));
  
  const duplicates = chosenQuestions.reduce((acc, obj, index) => {
    const duplicates = chosenQuestions.filter((item, i) => i !== index && item[key] === obj[key]);
    if (duplicates.length > 0 && !acc.some((dup) => dup[key] === obj[key])) {
      acc.push(obj);
    }
    return acc;
  }, []);
  console.log(duplicates);*/
  chosenQuestions = remaining
    ? remainingQuestions.map((v) => v)
    : uniqueQuestions.map((v) => v);
  console.log(chosenQuestions);

  let tqElem = document.querySelector("#total-question");
  let total = Number(tqElem.value);
  if (isNaN(total) || total < 1 || total > chosenQuestions.length) {
    total = chosenQuestions.length;
  }
  var shuffleQuestions = shuffle(chosenQuestions);
  chosenQuestions = shuffleQuestions.slice(0, total);
  remainingQuestions = shuffleQuestions.slice(total);
}

function updateRewindBtn() {
  const rewindBtn = document.querySelector("#rewind");
  const uncleared = unclearedQuestions.length;
  rewindBtn.disabled = uncleared < 1;
  rewindBtn.innerText = `Rewind (${uncleared})`;
}

function saveUnclearedQuestions() {  
  const key = 'questionText';
  var unitUnclearedQuestions = [...new Map(unclearedQuestions.map(item => [item[key], item])).values()];
  unclearedQuestions = unitUnclearedQuestions.map((v) => v);
  localStorage.setItem(
    unclearedQuestionsKey,
    JSON.stringify(unclearedQuestions)
  );
}

function loadUnclearedQuestions() {
  const jsonData = localStorage.getItem(unclearedQuestionsKey);
  unclearedQuestions = jsonData ? JSON.parse(jsonData) : [];
}
