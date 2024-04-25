export interface StudentInfo {
  id: number;
  phone: string;
  adress: string;
  studentId: number;
}

export type CreateStudentInfo = Omit<StudentInfo, "id">;
