export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries:Entries[];
  
}
export type Entries =
|HospitalEntry
|OccupationalHealthCareEntry
|Hospital;

export interface OccupationalHealthCareEntry extends BaseEntry{
  type: 'OccupationalHealthcare',
  employerName: string;
  sickLeave?:SickLeave
}
export interface HospitalEntry extends BaseEntry {
  type: 'HealthCheck',
  healthCheckRating: HealthCheckRating
}
export interface Hospital extends BaseEntry {
  type: 'Hospital',
  discharge:Discharge
}
export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}
interface SickLeave{
    startDate:string;
    endDate:string;
}
interface Discharge{
  date:string;
  criteria:string;
}
interface BaseEntry{
  id:string;
  description:string;
  date:string;
  specialist:string;
  diagnosisCodes?:Array<DiagnoseEntry['code']>;
}
  export interface DiagnoseEntry{
    code:string,
    name:string,
    latin?:string
}