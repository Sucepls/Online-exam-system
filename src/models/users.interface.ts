import type {Class} from "@/models/classes.interface";


export interface User {
  id: number
  email: string
  password: string
  name: string
  role: Role | string
  classes?: Class[]
  createdAt: Date
  updatedAt: Date
  token: string
}

export enum Role {
  STUDENT = 'STUDENT',
  INSTRUCTOR = 'INSTRUCTOR'
}
