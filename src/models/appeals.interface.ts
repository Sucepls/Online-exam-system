import type { User } from '@/models/users.interface'
import type { Answer } from '@/models/answers.interface'

export interface Appeal {
  id: number
  student: User
  studentId: number
  answer: Answer
  answerId: number
  status: AppealStatus
  createdAt: Date
  updatedAt: Date
}

export enum AppealStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}
