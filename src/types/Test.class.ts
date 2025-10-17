//Type of exercises for test
export type ExerciseType = 'listening' | 'reading';

// Define the content of the Test class
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

export class Exercise {
 questionId: string; //Using that for unique identification of exercises 
 type?: ExerciseType;
 questionPrompt: string;
 answerChoices?: AnswerChoices[]
 answer: string;

 constructor(
  questionId: string, 
  type: ExerciseType,
  questionPrompt: string, 
  answerChoices: AnswerChoices[], 
  answer: string
){
  this.questionId = questionId;
  this.type = type;
  this.questionPrompt = questionPrompt;
  this.answerChoices = answerChoices;
  this.answer = answer;
 }
}

export class Sequence {
  sequenceNum: number;
  exercises: Exercise[];

  constructor(sequenceNum: number, exercises: Exercise[]) {
   this.sequenceNum = sequenceNum;
   this.exercises = exercises;
  }
}

export class StudentAnswer{
  exerciseId: number;
  answer: string;
  
  constructor(exerciseId: number, answer: string){
    this.exerciseId = exerciseId;
    this.answer = answer;
  }

  isCorrect(correctAnswerId: string): boolean{
    return this.answer === correctAnswerId;
  }
}

//answer choices for exercises
const answerChoices1: AnswerChoices[] = [
  new AnswerChoices('A', 'Choice A'),
  new AnswerChoices('B', 'Choice B'),
  new AnswerChoices('C', 'Choice C'),
  new AnswerChoices('D', 'Choice D'),
];

const answerChoices2: AnswerChoices[] = [
  new AnswerChoices('A', 'Choice A'),
  new AnswerChoices('B', 'Choice B'),
  new AnswerChoices('C', 'Choice C'),
  new AnswerChoices('D', 'Choice D'),
]; 

const answerChoices3: AnswerChoices[] = [
  new AnswerChoices('A', 'Choice A'),
  new AnswerChoices('B', 'Choice B'),
  new AnswerChoices('C', 'Choice C'),
  new AnswerChoices('D', 'Choice D'),
];

//creating some exercises for the sequences 
const reperes1: Exercise[] = [
  new Exercise(1, 'listening', "Question 1", answerChoices1, "A"),
  new Exercise(2, 'listening', "Question 2", answerChoices1, "B"),
  new Exercise(3, 'listening', "Question 3", answerChoices1, "C"),
  new Exercise(4, 'listening', "Question 4", answerChoices1, "D"),
  new Exercise(5, 'listening', "Question 5", answerChoices1, "A"),
  new Exercise(6, 'listening', "Question 6", answerChoices1, "B"),
  new Exercise(7, 'listening', "Question 7", answerChoices1, "C"),
  new Exercise(8, 'listening', "Question 8", answerChoices1, "D"),
];

const reperes2a: Exercise[] = [
  new Exercise(1, 'reading', "Question 1", answerChoices2, "A"),
  new Exercise(2, 'reading', "Question 2", answerChoices2, "B"),
  new Exercise(3, 'reading', "Question 3", answerChoices2, "C"),
  new Exercise(4, 'reading', "Question 4", answerChoices2, "D"),  
  new Exercise(5, 'reading', "Question 5", answerChoices2, "A"),
  new Exercise(6, 'reading', "Question 6", answerChoices2, "B"),
  new Exercise(7, 'reading', "Question 7", answerChoices2, "C"),
  new Exercise(8, 'reading', "Question 8", answerChoices2, "D"),
  new Exercise(9, 'reading', "Question 9", answerChoices2, "A"),
];

const reperes3: Exercise[] = [
  new Exercise(1, 'reading', "Question 1", answerChoices3, "A"),
  new Exercise(2, 'reading', "Question 2", answerChoices3, "B"),
  new Exercise(3, 'reading', "Question 3", answerChoices3, "C"),
  new Exercise(4, 'reading', "Question 4", answerChoices3, "D"),
  new Exercise(5, 'reading', "Question 5", answerChoices3, "A"),
  new Exercise(6, 'reading', "Question 6", answerChoices3, "B"),
  new Exercise(7, 'reading', "Question 7", answerChoices3, "C"),
  new Exercise(8, 'reading', "Question 8", answerChoices3, "D"),
  new Exercise(9, 'reading', "Question 9", answerChoices3, "A"),
];