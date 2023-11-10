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

export interface IStudent{
    id: number;
    name: string;
    email: string;
}

export type TCreateStudentBody = Omit<IStudent, 'id'>;