import { QuestionServices } from "./services/question.services";
import { StudentServices } from "./services/student.services";
import { StudentInfoServices } from "./services/studentInfo.services";

async function exampleController() {
   const questionServices = new QuestionServices();

   await questionServices.deleteMany(2);


}

exampleController();

