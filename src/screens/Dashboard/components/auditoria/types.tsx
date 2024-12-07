export interface Auditoria {
    id: any,
    spreadsheetName: any;
    SpreadSheetId:number;
    PatientId:any;
    pacientId: number;
    pacient: string;
    CarerId:number;
    carerId: number;
    carer: string;
    sheetCompletedDate: string; // Puedes considerar cambiar esto a Date si prefieres manejarlo como un objeto Date
    sheetCompletedId: number;
    sheetName: string;
    steps: any;
    SpreedSheetCompletedItems:any;
  }
  

  export interface Step {
    id: any;
    text: string;
    isRequired: boolean;
    answerType: number;
    options: string;
    response: string;
}