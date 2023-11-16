import { prisma } from "../database/prisma";
import { TCreateStudentBody, TUpdateStudentBody } from "../interfaces/student.interfaces";

export class StudentServices {
   async create(body: TCreateStudentBody) {
      return await prisma.student.create({ data: body });
   }

   async createMany(data: TCreateStudentBody[]) {
      return await prisma.student.createMany({ data });
   }

   async findOne(id: number) {
      return await prisma.student.findFirst({
         where: { id },
         include: { studentInfo: true },
      });
   }

   async findMany(search?: string) {
      return await prisma.student.findMany({
         where: { name: { contains: search, mode: "insensitive" } },
         include: { studentInfo: true },
      });
   }

   async updateOne(id: number, data: TUpdateStudentBody){
      return await prisma.student.update({ where: { id }, data });
   }
}   
