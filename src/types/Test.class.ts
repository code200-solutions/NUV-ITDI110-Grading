//Type of exercises and answers for test
import { ImageSourcePropType, ImageURISource } from "react-native";

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
  private testDescription: string;
  private answer: string[] = [];
  static sequences: any;
  exercises: string;
  answers: StudentAnswer;

  constructor(testId: string, sequences: Sequence[], description: string = "") {
    this.testId = testId;
    this.sequences = sequences;
    this.testDescription = description;
  }

  getTestId(): string {
    return this.testId;
  }

  getAllExercises(): Exercise[] {
    return this.sequences.flatMap(sequence => sequence.getExercises());
  }

  getDescription(): string {
    return this.testDescription;
  }

  calculateMark(exercises: Exercise[]): number {
    let correctAnswerId = 0;
    let mark = 0;

    for (const sequence of Test.sequences) {
      for (const exercise of sequence.exercises) {
        const studentAnswer = this.answers.find(
          ans => ans.exerciseId === exercise.questionId
        );
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
  private answerId: string;

  constructor(answerChoiceId: string){
    this.answerChoiceId = answerChoiceId;
  }

  getId(): string {
    return this.answerChoiceId;
  }
  getAnswerId(): string {
    return this.answerId;
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
  private imageUri: ImageSourcePropType;
 
  constructor(id: string, imageUri: number | Required<Pick<ImageURISource, 'uri' | 'width' | 'height'>>){
    super(id);
    this.imageUri = imageUri;
  }
  getImageUri(): ImageSourcePropType{
    return this.imageUri;
  }
   getText(): string{
    return this.answerChoiceId;
   }
}

// Exercise class representing each question in the test
export class Exercise {
  private questionId: string; //Using string for unique identification of exercises 
  private type?: ExerciseType;
  private questionPrompt: string;
  private answerChoice: AnswerChoice[];
  protected goodAnswerId: string;
  private instructionText?: string;   
  private audioUri?: ImageURISource | number | { uri: string }; 

  constructor(
    questionId: string, 
    type: ExerciseType,
    questionPrompt: string, 
    answerChoice: AnswerChoice[], 
    goodAnswerId: string,
    instructionText?: string,    
    audioUri?: ImageURISource | number | { uri: string }
  ){
    this.questionId = questionId;
    this.type = type;
    this.questionPrompt = questionPrompt;
    this.answerChoice = answerChoice;
    this.goodAnswerId = goodAnswerId;
    this.instructionText = instructionText;
    this.audioUri = audioUri;
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
  getAnswer() {
    return this.answerChoice;
  }
  isCorrect(answerId: string): boolean{
    return this.goodAnswerId === answerId;
  }
  getInstructionText(): string | undefined {
    return this.instructionText;
  }

  getAudioUri(): ImageURISource | number | { uri: string } | undefined {
    return this.audioUri;
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
  find: any;
  
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
