export interface Student {
  id: number;
  name: string;
  email: string;
}

export type StudentCreate = Omit<Student, "id">;
