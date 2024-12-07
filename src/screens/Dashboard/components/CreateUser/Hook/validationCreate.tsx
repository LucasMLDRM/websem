import * as Yup from 'yup';

const validationCreate = Yup.object().shape({
  displayName: Yup.string()
    .required('El nombre a mostrar es requerido')
    .min(3, 'Debe tener mínimo 3 caracteres'),
  userName: Yup.string()
    .required('El nombre de usuario es requerido')
    .min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es requerido'),
  firstName: Yup.string()
    .required('El nombre es requerido'),
  lastName: Yup.string()
    .required('El apellido es requerido'),
  birthDate: Yup.date()
    .required('La fecha de nacimiento es requerida')
    .max(new Date(), 'La fecha de nacimiento no puede estar en el futuro'),
  documentNumber: Yup.string()
    .required('El número de documento es requerido'),
  address: Yup.string()
    .required('La dirección es requerida'),
  location: Yup.string()
    .required('La localidad es requerida'),
  province: Yup.string()
    .required('La provincia es requerida'),
  postalCode: Yup.number()
    .typeError('El código postal debe ser un número')
    .min(1, 'El código postal debe ser mayor a 0')
    .required('El código postal es requerido'),
  phoneNumber: Yup.string()
    .required('El número de teléfono es requerido')
    .matches(/^\d+$/, 'El número de teléfono debe ser un número'),
  phoneNumber2: Yup.string()
    .matches(/^\d+$/, 'El número de teléfono debe ser un número'),
  rolesName: Yup.array()
    .of(Yup.string().required('El rol es requerido'))
    .min(1, 'Debe seleccionar al menos un rol')
    .required('El rol es requerido'),
});

export default validationCreate;

