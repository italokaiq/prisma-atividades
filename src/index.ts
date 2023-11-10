import { StudentServices } from "./services/student.services";

async function exampleController() {
   const studentServices = new StudentServices();

   const create = await studentServices.create({
      name: "Rodolfo",
      email: "rodolfo123@email.com",
   });

   console.log(create);

   const createMany = await studentServices.createMany([
      { name: "Maria", email: "maria123@email.com" },
      { name: "José", email: "jose123@email.com" },
   ]);

   console.log(createMany);
}

exampleController();
