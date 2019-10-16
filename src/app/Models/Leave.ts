import { Employee } from './Employee';

export interface Leave{
    id:number;
    leaveType:string;
    leaveFromDate:string;
    leaveToDate:string;
    description:string;
    employee:Employee[]
}