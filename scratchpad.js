// const { candidateAnswer } = require("./candidate-testing");

let candidateAnswers = ['SALLy ride', 'TruE', '30', 'TrajectoRy', '2'];
let correctAnswers = [ 'Sally Ride', 'false', '40', 'Trajectory', '3' ]; 
let numCorrect = 0 
let caseCandAnswers = [];
let caseCorrAnswers = [];

for (i = 0; i < candidateAnswers.length; i++) {
    caseCandAnswers.push(candidateAnswers[i].toUpperCase())
}
console.log(caseCandAnswers)
// // for (i = 0; i < candidateAnswers.length; i++) {
    
// //    if ( candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
   
// //     i++
// //    }
   
// //    numCorrect++
 
   
// // }
// // console.log(numCorrect)
// // // let i = 0; sum = 0
// // // while (i <= candidateAnswers.length   && (candidateAnswers[i].toLowerCase()) === (correctAnswers[i].toLowerCase())) {
// // //    i++  
// // // sum ++
// // // numCorrect = sum
// // // console.log(sum)
    


// // console.log(`
// //     ${candidateName}`)      
// //     for (let i = 0; i < candidateAnswers.length; i++) { 
    
// //     console.log(`${i+1}) ${questions[i]}
// //     Your Answer: ${candidateAnswers[i]}
// //     Correct Answer: ${correctAnswers[i]}`)
// //     }
// //     if (grade >= 80) {
// //       let passOrFail = "PASSED"
// //     } else { 
// //       passOrFail = "FAILED"
// //     }
// //     console.log(`
// //     >>> Overall Grade: ${grade}% (${numCorrect} out of ${questions.length} responses correct) <<<
// //     >>> Status: ${passOrFail} <<<
// //     `)   

   
// for (let i = 0; i < correctAnswers.length; i++) {
//     caseCandAnswers.push(candidateAnswers[i].toLowerCase());
// }
// console.log(caseCandAnswers)

// for (let i = 0; i < correctAnswers.length; i++) {
//     caseCorrAnswers.push(correctAnswers[i].toLowerCase());
// }
// console.log(caseCorrAnswers);

// console.log(caseCorrAnswers[0].includes(caseCandAnswers[0]));


// for (let i = 0; i < correctAnswers.length; i++) {
//     caseCandAnswers.push(candidateAnswers[i].toLowerCase());
//   }
  
//   for (let i = 0; i < correctAnswers.length; i++) {
//     caseCorrAnswers.push(correctAnswers[i].toLowerCase());
// candidateAnswer
//     caseCandAnswers.push(candidateAnswers).toLowerCase();
// caseCorrAnswers.push(candidateAnswer).toLowerCase();