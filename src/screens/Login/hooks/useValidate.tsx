import * as Yup from 'yup';

export default function useValidate() {
    const validationSchema = Yup.object({
        username: Yup.string()
          .required('Required')
          .min(4, 'Username must be at least 4 characters long')
          .max(15, 'Username must be at most 15 characters long'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Required')
          .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
          .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
          .matches(/\d/, 'Password must contain at least one number')
          .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    });

    return { validationSchema };
}

