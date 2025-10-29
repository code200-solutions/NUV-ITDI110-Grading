import { AnswerChoice, Exercise, ImageAnswerChoice, Sequence, Test, TextAnswerChoice } from "@/types/Test.class";

// Image image assets
const imgRep1Seq1Ex1Img6 = require('@/assets/images/reperes1/rep1-seq1-ex1-img6.png');
//answer choices for exercises
export const answerChoices1: AnswerChoice[] = [
  new ImageAnswerChoice('A', { uri: 'https://raw.githubusercontent.com/code200-solutions/NUV-ITDI110-Grading/refs/heads/feat/dashboard-tests-screen/src/assets/images/reperes1/rep1-seq1-ex1-img5.png', width: 162, height: 94 }),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img6),
  new ImageAnswerChoice('C', 'https://github.com/code200-solutions/NUV-ITDI110-Grading/blob/feat/dashboard-tests-screen/src/assets/images/reperes1/rep1-seq1-ex1-img7.png'),
  new ImageAnswerChoice('D', 'https://github.com/code200-solutions/NUV-ITDI110-Grading/blob/feat/dashboard-tests-screen/src/assets/images/reperes1/rep1-seq1-ex1-img8.png'),
];

export const answerChoices2: AnswerChoice[] = [
  new AnswerChoice('A'),
  new AnswerChoice('B'),
  new AnswerChoice('C'),
  new AnswerChoice('D'),
]; 

export const answerChoices3: AnswerChoice[] = [
  new AnswerChoice('A'),
  new AnswerChoice('B'),
  new AnswerChoice('C'),
  new AnswerChoice('D'),
];

//creating some exercises for the sequences 
export const reperes1: Exercise[] = [
  new Exercise("rep1-seq1-ex1", 'listening', "Question 1", answerChoices1, "A"),
  new Exercise("rep1-seq1-ex2", 'listening', "Question 2", answerChoices1, "B"),
  new Exercise("rep1-seq1-ex3", 'listening', "Question 3", answerChoices1, "C"),
  new Exercise("rep1-seq2-ex4", 'listening', "Question 4", answerChoices1, "D"),
  new Exercise("rep1-seq2-ex5", 'listening', "Question 5", answerChoices1, "A"),
  new Exercise("rep1-seq3-ex6", 'listening', "Question 6", answerChoices1, "B"),
  new Exercise("rep1-seq3-ex7", 'listening', "Question 7", answerChoices1, "C"),
  new Exercise("rep1-seq3-ex8", 'listening', "Question 8", answerChoices1, "D"),
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
  new Test('test.1', [new Sequence('test1.seq1', reperes1)]),
  new Test('test.2', [new Sequence('test2.seq1', reperes2a)]),
  new Test('test.3', [new Sequence('test3.seq1', reperes3)]),
  // ... add more tests as needed
]