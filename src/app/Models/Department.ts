export class Department{
    
  private   id:number;
  private   departmentName:string

  public get getid(){
      return this.id
  }
  public get getdpt(){
      return this.departmentName
  }

  
  
 public set setid(id:number){
     this.id=id;
     
 }
  
 
 public set setdpt(v : string) {
     this.departmentName = v;
 }
 
  
}

