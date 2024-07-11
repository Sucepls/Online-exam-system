import type {Class} from "@/models/classes.interface";
import type {Question} from "@/models/questions.interface";

export interface Exam {
  id?: number;
  title: string;
  class?: Class;
  classId: number;
  questions?: Question[];
  attemptsAllowed: number;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  updatedAt: Date;
}
