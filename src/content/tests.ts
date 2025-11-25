import { AnswerChoice, Exercise, ImageAnswerChoice, Sequence, Test, TextAnswerChoice } from "@/types/Test.class";
import { AudioSource } from "expo-audio";
//Audio assets
const audioRep1Q1: AudioSource = require('../assets/audio/rep1-q1.mp3');
// Image assets Rep 1 Ex1
const imgRep1Seq1Ex1Img1 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img1.png');
const imgRep1Seq1Ex1Img2 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img2.png');
const imgRep1Seq1Ex1Img3 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img3.png');
const imgRep1Seq1Ex1Img4 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img4.png');
const imgRep1Seq1Ex1Img5 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img5.png');
const imgRep1Seq1Ex1Img6 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img6.png');
const imgRep1Seq1Ex1Img7 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img7.png');
const imgRep1Seq1Ex1Img8 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img8.png');
const imgRep1Seq1Ex1Img9 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img9.png');
const imgRep1Seq1Ex1Img10 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img10.png');
const imgRep1Seq1Ex1Img11 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img11.png');
const imgRep1Seq1Ex1Img12 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img12.png');
const imgRep1Seq1Ex1Img13 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img13.png');
const imgRep1Seq1Ex1Img14 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img14.png');
const imgRep1Seq1Ex1Img15 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img15.png');
const imgRep1Seq1Ex1Img16 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img16.png');
const imgRep1Seq1Ex1Img17 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img17.png');
const imgRep1Seq1Ex1Img18 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img18.png');
const imgRep1Seq1Ex1Img19 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img19.png');
const imgRep1Seq1Ex1Img20 = require('@/assets/images/reperes1/ex1/rep1-seq1-ex1-img20.png');

// Image assets Rep 1 Ex2
const imgRep1Seq1Ex2Img1a1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img1(a1).png');
const imgRep1Seq1Ex2Img2a2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img2(a2).png');
const imgRep1Seq1Ex2Img3a3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img3(a3).png');
const imgRep1Seq1Ex2Img4b1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img4(b1).png');
const imgRep1Seq1Ex2Img5b2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img5(b2).png');
const imgRep1Seq1Ex2Img6b3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img6(b3).png');
const imgRep1Seq1Ex2Img7c1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img7(c1).png');
const imgRep1Seq1Ex2Img8c2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img8(c2).png');
const imgRep1Seq1Ex2Img9c3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img9(c3).png');
const imgRep1Seq1Ex2Img10d1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img10(d1).png');
const imgRep1Seq1Ex2Img11d2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img11(d2).png');
const imgRep1Seq1Ex2Img12d3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img12(d3).png');
const imgRep1Seq1Ex2Img13e1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img13(e1).png');
const imgRep1Seq1Ex2Img14e2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img14(e2).png');
const imgRep1Seq1Ex2Img15e3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img15(e3).png');
const imgRep1Seq1Ex2Img16f1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img16(f1).png');
const imgRep1Seq1Ex2Img17f2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img17(f2).png');
const imgRep1Seq1Ex2Img18f3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img18(f3).png');
const imgRep1Seq1Ex2Img19g1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img19(g1).png');
const imgRep1Seq1Ex2Img20g2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img20(g2).png');
const imgRep1Seq1Ex2Img21g3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img21(g3).png');
const imgRep1Seq1Ex2Img22i1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img22(i1).png');
const imgRep1Seq1Ex2Img23i2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img23(i2).png');
const imgRep1Seq1Ex2Img24i3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img24(i3).png');
const imgRep1Seq1Ex2Img25m1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img25(m1).png');
const imgRep1Seq1Ex2Img26m2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img26(m2).png');
const imgRep1Seq1Ex2Img27m3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img27(m3).png');
const imgRep1Seq1Ex2Img28n1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img28(n1).png');
const imgRep1Seq1Ex2Img29n2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img29(n2).png');
const imgRep1Seq1Ex2Img30n3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img30(n3).png');
const imgRep1Seq1Ex2Img31o1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img31(o1).png');
const imgRep1Seq1Ex2Img32o2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img32(o2).png');
const imgRep1Seq1Ex2Img33o3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img33(o3).png');
const imgRep1Seq1Ex2Img34r1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img34(r1).png');
const imgRep1Seq1Ex2Img35r2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img35(r2).png');
const imgRep1Seq1Ex2Img36r3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img36(r3).png');
const imgRep1Seq1Ex2Img37s1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img37(s1).png');
const imgRep1Seq1Ex2Img38s2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img38(s2).png');
const imgRep1Seq1Ex2Img39s3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img39(s3).png');
const imgRep1Seq1Ex2Img40v1 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img40(v1).png');
const imgRep1Seq1Ex2Img41v2 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img41(v2).png');
const imgRep1Seq1Ex2Img42v3 = require('@/assets/images/reperes1/ex2/rep1-seq1-ex2-img42(v3).png');
//answer choices for exercise 1, Reperes - 1
export const test1Ex1AnswerChoices1: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img1),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img2),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img3),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img4),
];

export const test1Ex1AnswerChoices2: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img5),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img6),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img7),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img8),
]; 

export const test1Ex1AnswerChoices3: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img9),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img10),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img11),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img12),
];

export const test1Ex1AnswerChoices4: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img13),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img14),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img15),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img16),
];

export const test1Ex1AnswerChoices5: AnswerChoice[] = [
  new ImageAnswerChoice('A', imgRep1Seq1Ex1Img17),
  new ImageAnswerChoice('B', imgRep1Seq1Ex1Img18),
  new ImageAnswerChoice('C', imgRep1Seq1Ex1Img19),
  new ImageAnswerChoice('D', imgRep1Seq1Ex1Img20),
];
//answer choices for exercise 2, Reperes - 1
export const test1Ex2AnswerChoices1: AnswerChoice[] = [
  new ImageAnswerChoice('1', imgRep1Seq1Ex2Img22i1),
  new ImageAnswerChoice('2', imgRep1Seq1Ex2Img17f2),
  new ImageAnswerChoice('3', imgRep1Seq1Ex2Img2a2),
  new ImageAnswerChoice('4', imgRep1Seq1Ex2Img33o3),
  new ImageAnswerChoice('5', imgRep1Seq1Ex2Img19g1),
  new ImageAnswerChoice('6', imgRep1Seq1Ex2Img11d2),
  new ImageAnswerChoice('7', imgRep1Seq1Ex2Img18f3),
  new ImageAnswerChoice('8', imgRep1Seq1Ex2Img31o1),
  new ImageAnswerChoice('9', imgRep1Seq1Ex2Img1a1),
  new ImageAnswerChoice('10', imgRep1Seq1Ex2Img24i3),
  new ImageAnswerChoice('11', imgRep1Seq1Ex2Img10d1),
  new ImageAnswerChoice('12', imgRep1Seq1Ex2Img21g3),
  new ImageAnswerChoice('13', imgRep1Seq1Ex2Img32o2),
  new ImageAnswerChoice('14', imgRep1Seq1Ex2Img23i2),
  new ImageAnswerChoice('15', imgRep1Seq1Ex2Img16f1),
  new ImageAnswerChoice('16', imgRep1Seq1Ex2Img20g2),
  new ImageAnswerChoice('17', imgRep1Seq1Ex2Img3a3),
  new ImageAnswerChoice('18', imgRep1Seq1Ex2Img12d3),
];

export const test1Ex2AnswerChoices2: AnswerChoice[] = [
  new ImageAnswerChoice('1', imgRep1Seq1Ex2Img13e1),
  new ImageAnswerChoice('2', imgRep1Seq1Ex2Img17f2),
  new ImageAnswerChoice('3', imgRep1Seq1Ex2Img2a2),
  new ImageAnswerChoice('4', imgRep1Seq1Ex2Img33o3),
  new ImageAnswerChoice('5', imgRep1Seq1Ex2Img19g1),
  new ImageAnswerChoice('6', imgRep1Seq1Ex2Img11d2),
  new ImageAnswerChoice('7', imgRep1Seq1Ex2Img18f3),
  new ImageAnswerChoice('8', imgRep1Seq1Ex2Img31o1),
  new ImageAnswerChoice('9', imgRep1Seq1Ex2Img1a1),
  new ImageAnswerChoice('10', imgRep1Seq1Ex2Img24i3),
  new ImageAnswerChoice('11', imgRep1Seq1Ex2Img10d1),
  new ImageAnswerChoice('12', imgRep1Seq1Ex2Img21g3),
  new ImageAnswerChoice('13', imgRep1Seq1Ex2Img32o2),
  new ImageAnswerChoice('14', imgRep1Seq1Ex2Img23i2),
  new ImageAnswerChoice('15', imgRep1Seq1Ex2Img16f1),
  new ImageAnswerChoice('16', imgRep1Seq1Ex2Img20g2),
  new ImageAnswerChoice('17', imgRep1Seq1Ex2Img3a3),
  new ImageAnswerChoice('18', imgRep1Seq1Ex2Img12d3),
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
export const reperes1Seq1: Exercise[] = [
//Exercise 1
  new Exercise(
    "rep1-seq1-ex1",
    'listening',
    "Question 1 Part A:",
    test1Ex1AnswerChoices1,
    ["A"],
    "Listen to a text then answer questions by circling the answer from among four options.",      
    audioRep1Q1                               
  ),
  new Exercise("rep1-seq1-ex2", 'listening', "Part B", test1Ex1AnswerChoices2, ["B"]),
  new Exercise("rep1-seq1-ex3", 'listening', "Part C", test1Ex1AnswerChoices3, ["C"]),
  new Exercise("rep1-seq2-ex4", 'listening', "Part D", test1Ex1AnswerChoices4, ["D"]),
  new Exercise("rep1-seq2-ex5", 'listening', "Part E", test1Ex1AnswerChoices5, ["A"]),

//Exercise 2
  new Exercise(
    "rep1-seq1-ex2",
    'listening',
    "Question 2 Part A:",
    test1Ex2AnswerChoices1,
    [ "1", "2", "3" ],
    "Listen to a text then answer questions by circling the answer from among four options.",      
    audioRep1Q1                               
  ),

  new Exercise(
    "rep1-seq1-ex2",
    'listening',
    "Question 2 Part B:",
    test1Ex2AnswerChoices2,
    [ "1", "2", "3" ],
    "Listen to a text then answer questions by circling the answer from among four options.",      
    audioRep1Q1                               
  ),
];

export const reperes2a: Exercise[] = [
  new Exercise("rep2a-seq1-ex1", 'reading', "Question 1", test2AnswerChoices1, ["A", "C", "D"]),
  new Exercise("rep2a-seq1-ex2", 'reading', "Question 2", test2AnswerChoices1, ["A", "C", "D"]),
  new Exercise("rep2a-seq1-ex3", 'reading', "Question 3", test2AnswerChoices1, ["A", "C", "D"]),
  new Exercise("rep2a-seq1-ex4", 'reading', "Question 4", test2AnswerChoices1, ["A", "C", "D"]),  
  new Exercise("rep2a-seq2-ex5", 'reading', "Question 5", test2AnswerChoices1, ["A", "C", "D"]),
  new Exercise("rep2a-seq2-ex6", 'reading', "Question 6", test2AnswerChoices1, ["A", "C", "D"]),
  new Exercise("rep2a-seq2-ex7", 'reading', "Question 7", test2AnswerChoices1, ["A", "C", "D"]),
  new Exercise("rep2a-seq3-ex8", 'reading', "Question 8", test2AnswerChoices1, ["A", "C", "D"]),
  new Exercise("rep2a-seq3-ex9", 'reading', "Question 9", test2AnswerChoices1, ["A", "C", "D"]),
  new Exercise("rep2a-seq3-ex10", 'reading', "Question 10", test2AnswerChoices1, ["A", "C", "D"]),
  new Exercise("rep2a-seq3-ex11", 'reading', "Question 11", test2AnswerChoices1, ["A", "C", "D"]),
];

export const reperes3: Exercise[] = [
  new Exercise("rep3-seq1-ex1", 'reading', "Question 1", test3AnswerChoices1, ["A"]),
  new Exercise("rep3-seq1-ex2", 'reading', "Question 2", test3AnswerChoices1, ["A"]),
  new Exercise("rep3-seq1-ex3", 'reading', "Question 3", test3AnswerChoices1, ["A"]),
  new Exercise("rep3-seq1-ex4", 'reading', "Question 4", test3AnswerChoices1, ["A"]),
  new Exercise("rep3-seq2-ex5", 'reading', "Question 5", test3AnswerChoices1, ["A"]),
  new Exercise("rep3-seq2-ex6", 'reading', "Question 6", test3AnswerChoices1, ["A"]),
  new Exercise("rep3-seq2-ex7", 'reading', "Question 7", test3AnswerChoices1, ["A"]),
  new Exercise("rep3-seq3-ex8", 'reading', "Question 8", test3AnswerChoices1, ["A"]),
  new Exercise("rep3-seq3-ex9", 'reading', "Question 9", test3AnswerChoices1, ["A"]),
];

export const Tests: Test[] = [
  new Test('Repere 1', [new Sequence('test1.seq1', reperes1Seq1,)],
    'This test evaluates your understanding of basic listening exercises using image recognition.'
  ),
  new Test('Reperes 2a', [new Sequence('test2.seq1', reperes2a)],
    ''),
  new Test('Reperes 3', [new Sequence('test3.seq1', reperes3)],
    ''),
  // ... add more tests as needed
]