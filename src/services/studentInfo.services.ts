import { prisma } from "../database/prisma";
import { TCreateStudentInfoBody, TUpdateStudentInfoBody } from "../interfaces/studentInfo.interfaces";

export class StudentInfoServices{
    async create(body: TCreateStudentInfoBody){
        return await prisma.studentInfo.create({ data: body });
    }

    async updateOne(studentId: number, data: TUpdateStudentInfoBody){
        return await prisma.studentInfo.update({ where: { studentId }, data});
    }

    async delete(studentId: number){
        return await prisma.studentInfo.delete({ where: { studentId }});
    }
}