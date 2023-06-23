const quizData = [
  {
    question: 'What university did zuckerberg attend?',
    options: [
      'Harvard University',
      'Arizona College',
      'Oxford University',
      'Tokyo University',
    ],
    answer: 'Harvard University',
  },
  {
    question: 'How old was Zuckerberg when he created Facebook?',
    options: ['23', '20', '18', '26'],
    answer: '20',
  },
  {
    question: "What's an Mark's ex-girlfriend's name?",
    options: [
      'Marylin Monroe',
      'Anna De Armas',
      'Erica Allbright',
      'Jessica Olsen',
    ],
    answer: 'Erica Allbright',
  },
  {
    question: 'Who claims that Zuckerberg stole their idea?',
    options: [
      'Bill Gates',
      'Joseph Joestar',
      'Winklevoss twins',
      'Dwayne Johnson',
    ],
    answer: 'Winklevoss twins',
  },
  {
    question: "Who is Zuckerberg's friend?",
    options: ['Eduardo Saverin', 'Keanu Reeves', 'Harry Potter', 'Jamal'],
    answer: 'Eduardo Saverin',
  },
  {
    question: 'Who is the author of the phrase "Facebook me"?',
    options: [
      'Khalid Kashmiri',
      'Christy Lee',
      'Khidir Karawita',
      'Ismail Ahmad Kanabawi',
    ],
    answer: 'Christy Lee',
  },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const question = quizData[currentQuestion];
  document.getElementById('question-number').textContent = `${
    currentQuestion + 1
  }/6`;
  document.getElementById('question').textContent = question.question;

  let optionsHTML = '';
  question.options.forEach((option, index) => {
    optionsHTML += `<input class="form-check-input" type='radio' name='answer' value='${option}' id='option${index}'>`;
    optionsHTML += `<label class="form-check-label" for='option${index}'>${option}</label><br>`;
  });

  document.getElementById('options').innerHTML = optionsHTML;
}

function checkAnswer() {
  const selectedOption = document.querySelector("input[name='answer']:checked");
  if (selectedOption) {
    if (selectedOption.value === quizData[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '<h2>Quiz Complete!</h2>';
  if (score >= 5) {
    quizContainer.innerHTML += `<h3>Your score: ${score}/${quizData.length}</h3>`;
    quizContainer.innerHTML
      += "<h3 style='font-weight: lighter'>Congratulations, you are very well versed in the movie</h3>";
    quizContainer.innerHTML
      += "<img src='https://yt3.googleusercontent.com/cHfmUUnYTB44yIQYkqGrVB0bqN_EnuME4hJKZyP7kzIK7LQNyL-8XYzTKNlvvSB_boWHKiZGVQ=s900-c-k-c0x00ffffff-no-rj' style='width: 25%; height: 25%'>";
  } else if (score >= 3) {
    quizContainer.innerHTML += `<h3>Your score: ${score}/${quizData.length}</h3>`;
    quizContainer.innerHTML
      += "<h3 style='font-weight: lighter'>You know the basic information about the movie</h3>";
    quizContainer.innerHTML
      += "<img src='https://pbs.twimg.com/media/D5Qkc2gWAAAD_mf.jpg:large' style='width: 25%; height: 25%'>";
  } else if (score < 3) {
    quizContainer.innerHTML += `<h3>Your score: ${score}/${quizData.length}</h3>`;
    quizContainer.innerHTML
      += "<h3 style='font-weight: lighter'>Have you really watched this movie?</h3>";
    quizContainer.innerHTML
      += "<img src='images/bad.webp' style='width: 25%; height: 25%'>";
  }
}
