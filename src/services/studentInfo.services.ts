import { prisma } from "../database/prisma";
import { CreateStudentInfo } from "../interfaces/studentInfo.interface";

export class StudentInfo {
  async create(body: CreateStudentInfo) {
    return await prisma.studentInfo.create({});
  }
}
