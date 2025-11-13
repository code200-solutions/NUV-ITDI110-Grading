import { AnswerChoice, Exercise, ImageAnswerChoice, Sequence, Test, TextAnswerChoice } from "@/types/Test.class";

// Image image assets
const imgRep1Seq1Ex1Img1 = require('@/assets/images/reperes1/rep1-seq1-ex1-img1.png');
const imgRep1Seq1Ex1Img2 = require('@/assets/images/reperes1/rep1-seq1-ex1-img2.png');
const imgRep1Seq1Ex1Img3 = require('@/assets/images/reperes1/rep1-seq1-ex1-img3.png');
const imgRep1Seq1Ex1Img4 = require('@/assets/images/reperes1/rep1-seq1-ex1-img4.png');
const imgRep1Seq1Ex1Img5 = require('@/assets/images/reperes1/rep1-seq1-ex1-img5.png');
const imgRep1Seq1Ex1Img6 = require('@/assets/images/reperes1/rep1-seq1-ex1-img6.png');
const imgRep1Seq1Ex1Img7 = require('@/assets/images/reperes1/rep1-seq1-ex1-img7.png');
const imgRep1Seq1Ex1Img8 = require('@/assets/images/reperes1/rep1-seq1-ex1-img8.png');
const imgRep1Seq1Ex1Img9 = require('@/assets/images/reperes1/rep1-seq1-ex1-img9.png');
const imgRep1Seq1Ex1Img10 = require('@/assets/images/reperes1/rep1-seq1-ex1-img10.png');
const imgRep1Seq1Ex1Img11 = require('@/assets/images/reperes1/rep1-seq1-ex1-img11.png');
const imgRep1Seq1Ex1Img12 = require('@/assets/images/reperes1/rep1-seq1-ex1-img12.png');
const imgRep1Seq1Ex1Img13 = require('@/assets/images/reperes1/rep1-seq1-ex1-img13.png');
const imgRep1Seq1Ex1Img14 = require('@/assets/images/reperes1/rep1-seq1-ex1-img14.png');
const imgRep1Seq1Ex1Img15 = require('@/assets/images/reperes1/rep1-seq1-ex1-img15.png');
const imgRep1Seq1Ex1Img16 = require('@/assets/images/reperes1/rep1-seq1-ex1-img16.png');
const imgRep1Seq1Ex1Img17 = require('@/assets/images/reperes1/rep1-seq1-ex1-img17.png');
const imgRep1Seq1Ex1Img18 = require('@/assets/images/reperes1/rep1-seq1-ex1-img18.png');
const imgRep1Seq1Ex1Img19 = require('@/assets/images/reperes1/rep1-seq1-ex1-img19.png');
const imgRep1Seq1Ex1Img20 = require('@/assets/images/reperes1/rep1-seq1-ex1-img20.png');

//answer choices for exercise 1 or Reperes - 1
export const answerChoices1: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img1),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img2),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img3),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img4),
];

export const answerChoices2: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img5),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img6),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img7),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img8),
]; 

export const answerChoices3: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img9),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img10),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img11),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img12),
];

export const answerChoices4: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img13),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img14),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img15),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img16),
];

export const answerChoices5: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img17),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img18),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img19),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img20),
];

//creating some exercises for the sequences 
export const reperes1: Exercise[] = [
  new Exercise("rep1-seq1-ex1", 'listening', "Question 1", answerChoices1, "A"),
  new Exercise("rep1-seq1-ex2", 'listening', "Question 2", answerChoices2, "B"),
  new Exercise("rep1-seq1-ex3", 'listening', "Question 3", answerChoices3, "C"),
  new Exercise("rep1-seq2-ex4", 'listening', "Question 4", answerChoices4, "D"),
  new Exercise("rep1-seq2-ex5", 'listening', "Question 5", answerChoices5, "A"),
];

export const reperes2a: Exercise[] = [
  new Exercise("rep2a-seq1-ex1", 'reading', "Question 1", answerChoices2, "A"),
  new Exercise("rep2a-seq1-ex2", 'reading', "Question 2", answerChoices2, "B"),
  new Exercise("rep2a-seq1-ex3", 'reading', "Question 3", answerChoices2, "C"),
  new Exercise("rep2a-seq1-ex4", 'reading', "Question 4", answerChoices2, "D"),  
  new Exercise("rep2a-seq2-ex5", 'reading', "Question 5", answerChoices2, "A"),
  new Exercise("rep2a-seq2-ex6", 'reading', "Question 6", answerChoices2, "B"),
  new Exercise("rep2a-seq2-ex7", 'reading', "Question 7", answerChoices2, "C"),
  new Exercise("rep2a-seq3-ex8", 'reading', "Question 8", answerChoices2, "D"),
  new Exercise("rep2a-seq3-ex9", 'reading', "Question 9", answerChoices2, "A"),
  new Exercise("rep2a-seq3-ex10", 'reading', "Question 10", answerChoices2, "B"),
  new Exercise("rep2a-seq3-ex11", 'reading', "Question 11", answerChoices2, "C"),
];

export const reperes3: Exercise[] = [
  new Exercise("rep3-seq1-ex1", 'reading', "Question 1", answerChoices3, "A"),
  new Exercise("rep3-seq1-ex2", 'reading', "Question 2", answerChoices3, "B"),
  new Exercise("rep3-seq1-ex3", 'reading', "Question 3", answerChoices3, "C"),
  new Exercise("rep3-seq1-ex4", 'reading', "Question 4", answerChoices3, "D"),
  new Exercise("rep3-seq2-ex5", 'reading', "Question 5", answerChoices3, "A"),
  new Exercise("rep3-seq2-ex6", 'reading', "Question 6", answerChoices3, "B"),
  new Exercise("rep3-seq2-ex7", 'reading', "Question 7", answerChoices3, "C"),
  new Exercise("rep3-seq3-ex8", 'reading', "Question 8", answerChoices3, "D"),
  new Exercise("rep3-seq3-ex9", 'reading', "Question 9", answerChoices3, "A"),
];

export const Tests: Test[] = [
  new Test('Test 1', [new Sequence('test1.seq1', reperes1)],
    'This test evaluates your understanding of basic listening exercises using image recognition.'
  ),
  new Test('Test 2', [new Sequence('test2.seq1', reperes2a)]),
  new Test('Test 3', [new Sequence('test3.seq1', reperes3)]),
  // ... add more tests as needed
]