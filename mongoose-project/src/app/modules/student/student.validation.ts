import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, "Firstname can't be more than 20 characters")
    .min(1, 'First Name is required.'),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().min(1, 'Last Name is required.'),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, "Father's Name is required."),
  fatherOccupation: z
    .string()
    .trim()
    .min(1, "Father's Occupation is required."),
  fatherContactNo: z
    .string()
    .trim()
    .min(1, "Father's Contact Number is required."),
  motherName: z.string().trim().min(1, "Mother's Name is required."),
  motherOccupation: z
    .string()
    .trim()
    .min(1, "Mother's Occupation is required."),
  motherContactNo: z
    .string()
    .trim()
    .min(1, "Mother's Contact Number is required."),
});

const localGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, "Local Guardian's Name is required."),
  occupation: z
    .string()
    .trim()
    .min(1, "Local Guardian's Occupation is required."),
  contactNo: z
    .string()
    .trim()
    .min(1, "Local Guardian's Contact Number is required."),
  address: z.string().trim().min(1, "Local Guardian's Address is required."),
});

const studentValidationSchema = z.object({
  id: z.string().min(1, 'ID is required.'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'others'], {
    required_error: 'Gender is required.',
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email('Invalid email address.')
    .min(1, 'Email is required.'),
  contactNo: z.string().min(1, 'Contact Number is required.'),
  emergencyContactNo: z
    .string()
    .min(1, 'Emergency Contact Number is required.'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
      errorMap: () => ({
        message:
          'The Blood Group must be one of the following: A+, A-, B+, B-, AB+, AB-, O+, O-.',
      }),
    })
    .optional(),
  presentAddress: z.string().min(1, 'Present Address is required.'),
  permanentAddress: z.string().min(1, 'Permanent Address is required.'),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

// Export the schema
export default studentValidationSchema;
