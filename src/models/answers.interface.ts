import type {User} from "@/models/users.interface";
import type {Question} from "@/models/questions.interface";
import type {Exam} from "@/models/exams.interface";
import type {Choice} from "@/models/choices.interface";

export interface Answer {
  id: number;
  text?: string;
  fileUrl?: string;
  student: User;
  studentId: number;
  question: Question;
  questionId: number;
  choiceId?:number;
  choice?: Choice;
  exam: Exam;
  examId: number;
  grade?: number;
  createdAt: Date;
  updatedAt: Date;
}
