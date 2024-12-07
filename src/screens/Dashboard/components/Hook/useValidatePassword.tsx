import * as Yup from 'yup';

const useValidatePassword = () => {
  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .required('Current password is required'),
    newPassword: Yup.string()
      .required('New password is required')
      .min(8, 'Password should be at least 8 characters long'),
  });

  return { validationSchema };
};

export default useValidatePassword;
