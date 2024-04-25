import { prisma } from "../database/prisma";
import { CreateStudent } from "../interfaces/student.interfaces";

export class StudentServices {
  async create(body: CreateStudent) {
    return await prisma.student.create({ data: body });
  }

  async createMany(data: CreateStudent[]) {
    return await prisma.student.createMany({ data });
  }
}
