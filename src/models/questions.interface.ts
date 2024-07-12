import type {Exam} from "@/models/exams.interface";
import type {Choice} from "@/models/choices.interface";



export interface Question {
  id: number;
  text: string;
  type: QuestionType | string;
  exam: Exam;
  examId: number;
  choices: Choice[];
  createdAt: Date;
  updatedAt: Date;
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  ESSAY = 'ESSAY',
}
