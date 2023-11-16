import { StudentServices } from "./services/student.services";
import { StudentInfoServices } from "./services/studentInfo.services";

async function exampleController() {
   const studentInfoServices = new StudentInfoServices();  

   const studentServices = new StudentServices();

   const updateStudent = await studentServices.updateOne(1, { name: "Rodolfo Nogueira"});

   console.log(updateStudent);

   const updateStudentInfo = await studentInfoServices.updateOne(1, { phone: "(41) 99898-8989"});

   console.log(updateStudentInfo)
}

exampleController();

