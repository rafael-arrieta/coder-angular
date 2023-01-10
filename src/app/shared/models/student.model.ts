export class Student{
    firstName:string;
    lastName:string;
    age:string;
    dni:string;
    id:number;
    active:boolean;
    

    constructor(
        firstName:string,
        lastName:string,
        age:string,
        dni:string,
        id:number,
        active: boolean
    ){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.dni=dni;
        this.id=id;
        this.active=active;
    }
}