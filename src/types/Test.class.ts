//Type of exercises and answers for test
type ReadingExercise = string;
type ListeningExercise = string;
type MatchingAnswers = Array<{question: string; answer:string}>;
type MultiChoiceAnswers = string[];
type ShortAnswers = string[];

export type AnswerType = MatchingAnswers | MultiChoiceAnswers | ShortAnswers;
export type ExerciseType = ReadingExercise | ListeningExercise;

// Define the content of the Test class
export class Test {
  private testId: string;
  private sequences: Sequence[];
  private answer: string[] = [];
  exercises: any;
  static sequences: any;
  answers: any;

  constructor(testId: string, sequences: Sequence[]) {
    this.testId = testId;
    this.sequences = sequences;
  }
  getTestId(): string {
    return this.testId;
  }
  getAllExercises(): Exercise[] {
    return this.sequences.flatMap(sequence => sequence.getExercises());
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

// Base class for answer choices
export class AnswerChoice {
  protected answerChoiceId: string;

  constructor(answerChoiceId: string){
    this.answerChoiceId = answerChoiceId;
  }

  getId(): string {
    return this.answerChoiceId;
  }
}

// child classes of AnswerChoice for different types of answer choices
export class TextAnswerChoice extends AnswerChoice {
  private text: string;

  constructor(id: string, text: string){
    super(id);
    this.text = text;
  }

  getText(): string {
    return this.text;
  }
}

export class ImageAnswerChoice extends AnswerChoice {
  private imageUri: string;

  constructor(id: string, imageUri: string){
    super(id);
    this.imageUri = imageUri;
  }
  getImageUri(): string{
    return this.imageUri;
  }
}

// Exercise class representing each question in the test
export class Exercise {
  private questionId: string; //Using string for unique identification of exercises 
  private type?: ExerciseType;
  private questionPrompt: string;
  private answerChoice: AnswerChoice[];
  private goodAnswerId: string;

  constructor(
    questionId: string, 
    type: ExerciseType,
    questionPrompt: string, 
    answerChoice: AnswerChoice[], 
    goodAnswerId: string
  ){
    this.questionId = questionId;
    this.type = type;
    this.questionPrompt = questionPrompt;
    this.answerChoice = answerChoice;
    this.goodAnswerId = goodAnswerId;
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
  getAnswerChoices(): AnswerChoice[] {
    return this.answerChoice;
  }
  getAnswer(): string {
    return this.goodAnswerId;
  }
  isCorrect(answerId: string): boolean{
    return this.goodAnswerId === answerId;
  }
}

//Sequence class representing a sequence of exercises
export class Sequence {
  private sequenceId: string;
  private exercises: Exercise[];

  constructor(sequenceId: string, exercises: Exercise[]) {
    this.sequenceId = sequenceId;
    this.exercises = exercises;
  }

  getSequenceId(): string {
    return this.sequenceId;
  }

  getExercises(): Exercise[] {
    return this.exercises;
  }
}

//StudentAnswer class representing a student's answer to an exercise
export class StudentAnswer{
  private exerciseId: string;
  private answerId: string;
  
  constructor(exerciseId: string, answerId: string){
    this.exerciseId = exerciseId;
    this.answerId = answerId;
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
}

//answer choices for exercises
const answerChoices1: AnswerChoice[] = [
  new TextAnswerChoice('A', 'Option A'),
  new ImageAnswerChoice('B', 'http://example.com/imageB.jpg'),
  new AnswerChoice('C'),
  new AnswerChoice('D'),
];

const answerChoices2: AnswerChoice[] = [
  new AnswerChoice('A'),
  new AnswerChoice('B'),
  new AnswerChoice('C'),
  new AnswerChoice('D'),
]; 

const answerChoices3: AnswerChoice[] = [
  new AnswerChoice('A'),
  new AnswerChoice('B'),
  new AnswerChoice('C'),
  new AnswerChoice('D'),
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
