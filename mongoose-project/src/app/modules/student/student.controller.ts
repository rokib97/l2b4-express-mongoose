import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';

// import { studentValidationSchema } from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // data validation using zod
    const zodParsedData = studentValidationSchema.parse(studentData);

    // will call service fun to send teh data
    const result = await StudentServices.createStudentIntoDb(zodParsedData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   });
    // }

    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created Successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDb();
    //send response
    res.status(200).json({
      success: true,
      message: 'Students is retrive Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDb(studentId);
    //send response
    res.status(200).json({
      success: true,
      message: 'Students is retrive Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
