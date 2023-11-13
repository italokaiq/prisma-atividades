import { StudentServices } from "./services/student.services";
import { StudentInfoServices } from "./services/studentInfo.services";

async function exampleController() {
   const studentInfoServices = new StudentInfoServices();  

   const studentServices = new StudentServices();

   const studentInfo1 = await studentInfoServices.create({ address: "Endereço 1", phone: "3333-3333", studentId: 1 });
   const studentInfo2 = await studentInfoServices.create({ address: "Endereço 2", phone: "3533-3533", studentId: 2 });
   
   console.log(studentInfo1);
   console.log(studentInfo2);

   const findOne = await studentServices.findOne(1);

   const findMany = await studentServices.findMany();

   const searchMany = await studentServices.findMany("rodolf");

   console.log(findOne);

   console.log(findMany);

   console.log(searchMany);
}

//exampleController();

