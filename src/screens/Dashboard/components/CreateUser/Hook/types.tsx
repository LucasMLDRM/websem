export interface FormValues {
    displayName: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    documentNumber: string;
    address: string;
    location: string;
    province: string;
    postalCode: number;
    phoneNumber: string;
    phoneNumber2: string;
    observations: string;
    profession: number;
    rolesName: string[];
  }
  
  export interface Role {
    id: string;
    name: string;
  }
  
  export interface FormErrors {
    [key: string]: string;
  }
  