import Joi from 'joi';

// Define the userName schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .max(20)
    .regex(/^[A-Z][a-zA-Z]*$/)
    .message('First name must start with an uppercase letter.'),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .message('Last name must contain only alphabetic characters.'),
});

// Define the guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.empty': "Father's Name is required.",
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.empty': "Father's Occupation is required.",
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.empty': "Father's Contact Number is required.",
  }),
  motherName: Joi.string().trim().required().messages({
    'string.empty': "Mother's Name is required.",
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.empty': "Mother's Occupation is required.",
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.empty': "Mother's Contact Number is required.",
  }),
});

// Define the localGuardian schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': "Local Guardian's Name is required.",
  }),
  occupation: Joi.string().trim().required().messages({
    'string.empty': "Local Guardian's Occupation is required.",
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': "Local Guardian's Contact Number is required.",
  }),
  address: Joi.string().trim().required().messages({
    'string.empty': "Local Guardian's Address is required.",
  }),
});

// Define the student schema
const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'others').required(),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email format.',
  }),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': 'Invalid blood group.',
    }),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().uri().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export { studentValidationSchema };
