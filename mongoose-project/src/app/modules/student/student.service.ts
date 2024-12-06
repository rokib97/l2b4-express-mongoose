import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDb = async (studentData: TStudent) => {
  // const result = await StudentModel.create(studentData); // build in static method

  const student = new Student(studentData); //create an instant
  if (await student.isUserExists(studentData.id)) {
    throw new Error('User already exists!!');
  }
  const result = await student.save(); // built in instance method
  return result;
};

const getAllStudentsFromDb = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentFromDb = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentsFromDb,
  getSingleStudentFromDb,
};
