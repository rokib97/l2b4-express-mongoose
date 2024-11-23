import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// will call controiller
router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudent);
router.get('/:studentId', StudentController.getAllStudent);

export const StudentRoutes = router;
