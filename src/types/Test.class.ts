//Type of exercises for test
export type ExerciseType = 'listening' | 'reading';

// Define the content of the Test class
export class Test {
  testId: string;
  sequences: Sequence[];
  static sequences: any;

  constructor(testId: string, sequences: Sequence[]) {
    this.testId = testId;
    this.sequences = sequences;
  }
}

//answer choices for exercises
  export class AnswerChoice {
  constructor(
    private id: string,
    private text?: string,
    private imageUri?: string
  ) {}

  getId(): string {
    return this.id;
  }
  getText(): string | undefined {
    return this.text;
  }
  getImageUri(): string | undefined {
    return this.imageUri;
  }
}

//Exercise class representing each question in the test
export class Exercise {
 private questionId: string; //Using that for unique identification of exercises 
 private type?: ExerciseType;
 private questionPrompt: string;
 private answerChoice?: AnswerChoice[]
 private answer: string;

 constructor(
  questionId: string, 
  type: ExerciseType,
  questionPrompt: string, 
  answerChoice: AnswerChoice[], 
  answer: string
){
  this.questionId = questionId;
  this.type = type;
  this.questionPrompt = questionPrompt;
  this.answerChoice = answerChoice;
  this.answer = answer;
 }
  getQuestionId(): string {
    return this.questionId;
  }
  getType(): ExerciseType | undefined {
    return this.type;
  }
  getQuestionPrompt(): string {
    return this.questionPrompt;
  }
  getAnswerChoices(): AnswerChoice[]{
    return this.answerChoice;
  }
  getAnswer(): string {
    return this.answer;
  }
  isCorrect(answerId: string): boolean{
    return this.answer === answerId;
  }
}

//Sequence class representing a sequence of exercises
export class Sequence {
  sequenceNum: number;
  exercises: Exercise[];
  static exercises: any;

  constructor(sequenceNum: number, exercises: Exercise[]) {
   this.sequenceNum = sequenceNum;
   this.exercises = exercises;
  }
}

//StudentAnswer class representing a student's answer to an exercise
export class StudentAnswer{
  exerciseId: string;
  answer: string;
  
  constructor(exerciseId: string, answer: string){
    this.exerciseId = exerciseId;
    this.answer = answer;
  }

  isCorrect(correctAnswerId: string): boolean{
    return this.answer === correctAnswerId;
  }
}

//Student submission class
export class StudentSubmission{
  studentId: string;
  testId: string;
  answers: StudentAnswer[];

  constructor(studentId: string, testId: string, answers: StudentAnswer[]){
    this.studentId = studentId;
    this.testId = testId;
    this.answers = answers;
  }

  calculateMark(exercises: Exercise[]): number{
    let correctAnswerId = 0;
    let mark = 0;
   
    for (const sequence of Test.sequences) {
      for (const exercise of sequence.exercises) {
        const studentAnswer = this.answers.find(ans => ans.exerciseId === exercise.questionId);
        if (studentAnswer) {
          mark++;
          if (studentAnswer.isCorrect(exercise.answer)) {
            correctAnswerId++;
          }
        }
      }
    }
    return (correctAnswerId / mark) * 100;
  }
}

//answer choices for exercises
const answerChoices1: AnswerChoice[] = [
  new AnswerChoice('A', 'Choice A'),
  new AnswerChoice('B', 'Choice B'),
  new AnswerChoice('C', 'Choice C'),
  new AnswerChoice('D', 'Choice D'),
];

const answerChoices2: AnswerChoice[] = [
  new AnswerChoice('A', 'Choice A'),
  new AnswerChoice('B', 'Choice B'),
  new AnswerChoice('C', 'Choice C'),
  new AnswerChoice('D', 'Choice D'),
]; 

const answerChoices3: AnswerChoice[] = [
  new AnswerChoice('A', 'Choice A'),
  new AnswerChoice('B', 'Choice B'),
  new AnswerChoice('C', 'Choice C'),
  new AnswerChoice('D', 'Choice D'),
];

//creating some exercises for the sequences 
const reperes1: Exercise[] = [
  new Exercise("rep1-seq1-ex1", 'listening', "Question 1", answerChoices1, "A"),
  new Exercise("rep1-seq1-ex2", 'listening', "Question 2", answerChoices1, "B"),
  new Exercise("rep1-seq1-ex3", 'listening', "Question 3", answerChoices1, "C"),
  new Exercise("rep1-seq2-ex4", 'listening', "Question 4", answerChoices1, "D"),
  new Exercise("rep1-seq2-ex5", 'listening', "Question 5", answerChoices1, "A"),
  new Exercise("rep1-seq3-ex6", 'listening', "Question 6", answerChoices1, "B"),
  new Exercise("rep1-seq3-ex7", 'listening', "Question 7", answerChoices1, "C"),
  new Exercise("rep1-seq3-ex8", 'listening', "Question 8", answerChoices1, "D"),
];

const reperes2a: Exercise[] = [
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

const reperes3: Exercise[] = [
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
