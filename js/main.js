// function Quiz(questions) {
//     this.score = 0; // счетчик
//     this.questions = questions; // список вопросов, суроолордун тизмеги
//     this.questionIndex = 0;
// }

// Quiz.prototype.getQuestionIndex = function () { // текущий вопрос
//     return this.questions[this.questionIndex]
// }

// Quiz.prototype.isEnded = function () { // проверяет на завершение игры
//     return this.questions.length === this.questionIndex
// }

// Quiz.prototype.guess = function (answer) {
//     if (this.getQuestionIndex().correctAnswer(answer)) {
//         this.score++
//     }
//     this.questionIndex++
// }

class Quiz {
    constructor(questions){
    this.score = 0; // счетчик
    this.questions = questions; // список вопросов, суроолордун тизмеги
    this.questionIndex = 0;
}
getQuestionIndex = () => { // текущий вопрос
    return this.questions[this.questionIndex]
}
isEnded = () => { // проверяет на завершение игры
    return this.questions.length === this.questionIndex
}

guess = (answer) => {
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++
    }
    this.questionIndex++
}

}