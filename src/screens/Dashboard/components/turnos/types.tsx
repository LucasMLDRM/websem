export interface Turno {
    id: number;
    date: string;
    dateTo: string;
    startTime: string;
    endTime: string;
    creationUser: string;
    creationDate: string;
    carerId: number;
    patientId: number;
    carerUserName?: string;
    patientUserName?: string;
  }
  