import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required.'],
    maxlength: [20, "Firstname cann't be more than 20 characters"],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required.'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, "Father's Name is required."],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, "Father's Occupation is required."],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, "Father's Contact Number is required."],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, "Mother's Name is required."],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, "Mother's Occupation is required."],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, "Mother's Contact Number is required."],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, "Local Guardian's Name is required."],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, "Local Guardian's Occupation is required."],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, "Local Guardian's Contact Number is required."],
  },
  address: {
    type: String,
    trim: true,
    required: [true, "Local Guardian's Address is required."],
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required.'],
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'others'],
    required: [true, 'Gender is required.'],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Contact Number is required.'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency Contact Number is required.'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message:
        'The Blood Group must be one of the following: A+, A-, B+, B-, AB+, AB-, O+, O-.',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present Address is required.'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent Address is required.'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required.'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardian information is required.'],
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
