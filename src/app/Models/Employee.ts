import { Attendance } from './Attendace';
import { Designation } from './Designation';
import { Payroll } from './Payroll';

export class Employee {
    
    
     public   id: number;
     public  firstName: string;
     public  lastName: string;
     public  phoneNumber: number;
     public  email: string;
     public  niNumber: string;
     public  gender: string;
     public  dateofBirth: string;
     public maritalStatus: string;
     public employeeType: string;
     public dateofJoin: string;
     public departmentId: number;
     public designationId: number;
     public designation :Designation
    
     public modeofRecruitment: string;
     public status: string;
     public education: string;
     public  experience: string;
     public  createdTime: string;
     public attendances: Attendance[]=[];
     public homeAddress:string;
     public city:string;
     public town:string;
     public postCode:string;
     public payRolls:Payroll[];
     
          
          
          
}