import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz.model';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizz: Quiz[] = [];
  currentQuiz = 0;
  answerSelected = false;
  correctAnswer = 0;
  inCorrectAnswer = 0;
  points = 0;
  result = false;
  ramdomize:number;
  quesover  = false;
  constructor(private server: QuizService) { }

  ngOnInit(): void {
    this.quizz = this.server.getQuizz();
    this.ramdomize = Math.floor(Math.random() * this.quizz.length-1)
  }


  onAnswer(option: boolean){
    this.answerSelected =  true;
    setTimeout(() => {
      this.currentQuiz++;
      this.ramdomize = Math.floor(Math.random() * this.quizz.length-1)
      this.answerSelected = false;
    }, 200);
    if(option) {
      this.correctAnswer++;
    }else {
      this.inCorrectAnswer++;
    }
    option ? this.points +=10 : this.points -=10;
  }

  showResult(){
    this.result = true
  }

  restartQuiz(){
    this.currentQuiz = 0;
    this.points = 0;
    this.ramdomize = Math.floor(Math.random() * this.quizz.length-1)
  }

}
