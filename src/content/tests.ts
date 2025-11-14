import { AnswerChoice, Exercise, ImageAnswerChoice, Sequence, Test, TextAnswerChoice } from "@/types/Test.class";
//Audio assets
const audioRep1Q1 = require('@/assets/audio/rep1-q1.mp3');
const audioRep1Q2 = require('@/assets/audio/rep1-q1.mp3');
const audioRep1Q3 = require('@/assets/audio/rep1-q1.mp3');
const audioRep1Q4 = require('@/assets/audio/rep1-q1.mp3');
const audioRep1Q5 = require('@/assets/audio/rep1-q1.mp3');
// Image assets
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
export const test1AnswerChoices1: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img1),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img2),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img3),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img4),
];

export const test1AnswerChoices2: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img5),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img6),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img7),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img8),
]; 

export const test1AnswerChoices3: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img9),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img10),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img11),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img12),
];

export const test1AnswerChoices4: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img13),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img14),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img15),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img16),
];

export const test1AnswerChoices5: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img17),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img18),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img19),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img20),
];

//Answer choices for reperes 2a
export const test2AnswerChoices1: AnswerChoice[] = [
  new TextAnswerChoice('A', "Question 1"),
  new TextAnswerChoice('B', "Question 1"),
  new TextAnswerChoice('C', "Question 1"),
  new TextAnswerChoice('D', "Question 1"),
];

//Answer choices for reperes 3
export const test3AnswerChoices1: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img17),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img18),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img19),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img20),
];

//creating some exercises for the sequences 
export const reperes1: Exercise[] = [
  new Exercise(
    "rep1-seq1-ex1",
    'listening',
    "Question 1",
    test1AnswerChoices1,
    "A",
    "Écoute attentivement et choisis la bonne image.",      
    audioRep1Q1                               
  ),
  new Exercise("rep1-seq1-ex2", 'listening', "Question 2", test1AnswerChoices1, "B"),
  new Exercise("rep1-seq1-ex3", 'listening', "Question 3", test1AnswerChoices1, "C"),
  new Exercise("rep1-seq2-ex4", 'listening', "Question 4", test1AnswerChoices1, "D"),
  new Exercise("rep1-seq2-ex5", 'listening', "Question 5", test1AnswerChoices1, "A"),
];

export const reperes2a: Exercise[] = [
  new Exercise("rep2a-seq1-ex1", 'reading', "Question 1", test2AnswerChoices1, "A"),
  new Exercise("rep2a-seq1-ex2", 'reading', "Question 2", test2AnswerChoices1, "B"),
  new Exercise("rep2a-seq1-ex3", 'reading', "Question 3", test2AnswerChoices1, "C"),
  new Exercise("rep2a-seq1-ex4", 'reading', "Question 4", test2AnswerChoices1, "D"),  
  new Exercise("rep2a-seq2-ex5", 'reading', "Question 5", test2AnswerChoices1, "A"),
  new Exercise("rep2a-seq2-ex6", 'reading', "Question 6", test2AnswerChoices1, "B"),
  new Exercise("rep2a-seq2-ex7", 'reading', "Question 7", test2AnswerChoices1, "C"),
  new Exercise("rep2a-seq3-ex8", 'reading', "Question 8", test2AnswerChoices1, "D"),
  new Exercise("rep2a-seq3-ex9", 'reading', "Question 9", test2AnswerChoices1, "A"),
  new Exercise("rep2a-seq3-ex10", 'reading', "Question 10", test2AnswerChoices1, "B"),
  new Exercise("rep2a-seq3-ex11", 'reading', "Question 11", test2AnswerChoices1, "C"),
];

export const reperes3: Exercise[] = [
  new Exercise("rep3-seq1-ex1", 'reading', "Question 1", test3AnswerChoices1, "A"),
  new Exercise("rep3-seq1-ex2", 'reading', "Question 2", test3AnswerChoices1, "B"),
  new Exercise("rep3-seq1-ex3", 'reading', "Question 3", test3AnswerChoices1, "C"),
  new Exercise("rep3-seq1-ex4", 'reading', "Question 4", test3AnswerChoices1, "D"),
  new Exercise("rep3-seq2-ex5", 'reading', "Question 5", test3AnswerChoices1, "A"),
  new Exercise("rep3-seq2-ex6", 'reading', "Question 6", test3AnswerChoices1, "B"),
  new Exercise("rep3-seq2-ex7", 'reading', "Question 7", test3AnswerChoices1, "C"),
  new Exercise("rep3-seq3-ex8", 'reading', "Question 8", test3AnswerChoices1, "D"),
  new Exercise("rep3-seq3-ex9", 'reading', "Question 9", test3AnswerChoices1, "A"),
];

export const Tests: Test[] = [
  new Test('Test 1', [new Sequence('test1.seq1', reperes1)],
    'This test evaluates your understanding of basic listening exercises using image recognition.'
  ),
  new Test('Test 2', [new Sequence('test2.seq1', reperes2a)]),
  new Test('Test 3', [new Sequence('test3.seq1', reperes3)]),
  // ... add more tests as needed
]