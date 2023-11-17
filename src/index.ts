import { QuestionServices } from "./services/question.services";
import { StudentServices } from "./services/student.services";
import { StudentInfoServices } from "./services/studentInfo.services";

async function exampleController() {
   const studentServices = new StudentServices();

   await studentServices.delete(1);


}

exampleController();

