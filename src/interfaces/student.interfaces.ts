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

import { StudentInfo } from "./studentInfo.interface";

export interface Student {
  id: number;
  name: string;
  email: string;
  studentInfo?: StudentInfo;
}

export type CreateStudent = Omit<Student, "id" | "studentInfo">;
