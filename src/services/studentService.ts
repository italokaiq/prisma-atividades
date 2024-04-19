import { prisma } from "../database/prisma";

export class StudentService {
  public create = async (studentName: string, studentEmail: string) => {
    return await prisma.student.create({
      data: {
        name: studentName,
        email: studentEmail,
      },
    });
  };

  createMany = async (studentNames: string[]) => {
    const student = studentNames.map((studentName) => ({ name: studentName }));

    return await prisma.student.createMany({
      data: [],
    });
  };
}
