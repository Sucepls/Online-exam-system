import type {User} from "@/models/users.interface";
import type {Exam} from "@/models/exams.interface";


export interface Class {
  id: number;
  name: string;
  description?: string;
  instructor?: User;
  instructorId: number;
  students?: User[];
  exams?: Exam[];
  inviteCode: string;
  createdAt: Date;
  updatedAt: Date;
}
