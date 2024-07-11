import type {Question} from "@/models/questions.interface";


export interface Choice {
  id: number;
  text: string;
  isCorrect: boolean;
  question?: Question;
  questionId: number;
}
