import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }


  quizz: Quiz[] = [
    {
      question: 'Which among the following controls all parts of the computer and known as the brain of computer?', 
      answer: [
        {option: 'RAM', correct: false},
        {option: 'ROM', correct: false},
        {option: 'CPU', correct: true},
        {option: 'Processor', correct: false}
      ]
    },
    {
      question: 'If you restart your computer by switching it off (i.e. power cut), it is known as …', 
      answer: [
        {option: 'Soft boot', correct: false},
        {option: 'Warm boot', correct: false},
        {option: 'Cold boot', correct: true},
        {option: 'A & C', correct: false}
      ]
    },
    {
      question: 'A web address is usually known as …', 
      answer: [
        {option: 'URL', correct: true},
        {option: 'UWL', correct: false},
        {option: 'WWW', correct: false},
        {option: 'UVL', correct: false}
      ]
    },
    {
      question: 'An IP address is a ………. Number.', 
      answer: [
        {option: '32-bit', correct: true},
        {option: '16-bit', correct: false},
        {option: '8-bit', correct: false},
        {option: '64-bit', correct: false}
      ]
    },
    {
      question: 'Who among the following has created the ‘twitter?', 
      answer: [
        {option: 'Jack Doesey', correct: true},
        {option: 'Butler Lampson', correct: false},
        {option: 'Ronald Rider', correct: false},
        {option: 'Greg Cheeson', correct: false}
      ]
    },
    {
      question: 'Which among the following correctly defines the IMac?', 
      answer: [
        {option: 'High definition monitor', correct: false},
        {option: 'High Capacity ROM', correct: false},
        {option: 'Simply a computer machine', correct: true},
        {option: 'A high speed processor', correct: false}
      ]
    },
    {
      question: 'Which among the following is known as ‘point-and-draw’ device?', 
      answer: [
        {option: 'Keyboard', correct: false},
        {option: 'Scanner', correct: false},
        {option: 'CPU', correct: false},
        {option: 'Mouse', correct: true}
      ]
    },
    {
      question: 'In reference to computer system, program has the similar meaning as of …', 
      answer: [
        {option: 'Software', correct: true},
        {option: 'Information', correct: false},
        {option: 'Data', correct: false},
        {option: 'Security system', correct: false}
      ]
    },
    {
      question: 'In reference to computer system, program has the similar meaning as of …', 
      answer: [
        {option: 'Software', correct: true},
        {option: 'Information', correct: false},
        {option: 'Data', correct: false},
        {option: 'Security System', correct: false}
      ]
    },
    {
      question: 'In a network system, which among the following is the most powerful computer?', 
      answer: [
        {option: 'Laptop', correct: false},
        {option: 'Server', correct: true},
        {option: 'Desktop', correct: false},
        {option: 'Notebook', correct: false}
      ]
    },
  ]
  

  
  getQuizz() {
    return this.quizz;
  }
  
  
}