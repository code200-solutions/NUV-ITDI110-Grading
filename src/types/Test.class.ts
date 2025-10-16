//Type of exercises for test
export type ExerciseType = 'listening' | 'reading';

// Define the content of the Test class
export class Sequence {
  sequenceNum: number;
  exercises: Exercise[];

  constructor(sequenceNum: number, exercices: Exercise[]) {
   this.sequenceNum = sequenceNum;
   this.exercises = exercices;
  }
}

export class Exercise {
 question: number;
 type?: ExerciseType;
 questionPomt: string;
 answerChoices?: AnswerChoices[]
 answer: string;

 constructor(
  question: number, 
  type: ExerciseType,
  questionPromt: string, 
  answerChoices: AnswerChoices[], 
  answer: string
){
  this.question = question;
  this.type = type;
  this.questionPomt = questionPromt;
  this.answerChoices = answerChoices;
  this.answer = answer;
 }
}

export class AnswerChoices{
  id: string;
  text?: string;
  imageUri?: string;

  constructor(id: string, text?: string, imageUri?: string){
    this.id = id;
    this.text = text;
    this.imageUri = imageUri;
  }
}

export class StudentAnswer{
  exerciseId: number;
  answer: string;
  
  constructor(exerciseId: number, answer: string){
    this.exerciseId = exerciseId;
    this.answer = answer;
  }
}

//creating some exercises for the sequences 
const reperes1: Exercise[] = [
  new Exercise(1, "Answer 1"),
  new Exercise(2, "Answer 2"),
  new Exercise(3, "Answer 3"),
  new Exercise(4, "Answer 4"),
  new Exercise(5, "Answer 5"),
  new Exercise(6, "Answer 6"),
  new Exercise(7, "Answer 7"),
  new Exercise(8, "Answer 8"),
];

const reperes2a: Exercise[] = [
  new Exercise(1, "Answer 1"),
  new Exercise(2, "Answer 2"),
  new Exercise(3, "Answer 3"), 
  new Exercise(4, "Answer 4"),
  new Exercise(5, "Answer 5"),
  new Exercise(6, "Answer 6"),
  new Exercise(7, "Answer 7"),
  new Exercise(8, "Answer 8"),
  new Exercise(9, "Answer 9"),
  new Exercise(10, "Answer 10"),
  new Exercise(11, "Answer 11"),
];

const reperes3: Exercise[] = [
  new Exercise(1, "Answer 1"),
  new Exercise(2, "Answer 2"),
  new Exercise(3, "Answer 3"),
  new Exercise(4, "Answer 4"),
  new Exercise(5, "Answer 5"),
  new Exercise(6, "Answer 6"),
  new Exercise(7, "Answer 7"),
  new Exercise(8, "Answer 8"),
  new Exercise(9, "Answer 9"),
];