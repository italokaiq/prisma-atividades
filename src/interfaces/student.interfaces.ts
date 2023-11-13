/*
model Student{
  id Int @id @default(autoincrement())
  name String
  email String @unique
  studentInfo StudentInfo?
  questions Question[]
  courses Course[]
}
*/

import { IStudentInfo } from "./studentInfo.interfaces";

export interface IStudent{
    id: number;
    name: string;
    email: string;
    studentInfo?: IStudentInfo;
}

export type TCreateStudentBody = Omit<IStudent, 'id' | 'studentInfo'>;