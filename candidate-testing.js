const { info } = require('console');
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";


//TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = [];

//TODO: Variables for Part 2
let questions = [ "Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let totalCorrect ="";


function askForName() {
 
   // TODO 1.1b: Ask for candidate's name //
candidateName = input.question ("Please Enter Your Name: ");
// candidateName = info;
firstName = [];
firstName = candidateName.split(" ")

}
//askForName();
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
let i = 0;
while (i < questions.length) {
  question = input.question (questions[i])
  question = String(question)
  candidateAnswers.push(question)
   i++ 
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


//TODO 3.2 use this variable to calculate the candidates score.
let numCorrect = 0
let i = 0
while (i < questions.length && (candidateAnswers[i].indexOf(correctAnswers[i])=== correctAnswers[i].indexOf(candidateAnswers[i]))) {
       i++
       numCorrect++
}
      
    totalCorrect = numCorrect
  

let grade = (totalCorrect/questions.length*100);
// let grade = ((numCorrect/questions.length) * 100);

  console.log(`
Candidate Name: ${candidateName}`);   
        
    for (let i = 0; i < questions.length; i++) { 
        
console.log(`
${i+1}) ${questions[i]}
Your Answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}`)
    }

  grade = (totalCorrect/ questions.length) *100

  let passOrFail = "";
  if (grade >= 80) {
  (passOrFail = "PASSED")
} else { 
  (passOrFail = "FAILED")}
{console.log(`
>>> Overall Grade: ${grade}% (${grade} out of ${questions.length} responses correct) <<<
>>> Status: ${passOrFail} <<<
`); }
  

return grade; 
}
  





 



function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hi, ${firstName[0]}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  

}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}
