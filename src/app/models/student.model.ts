export class Student{
    firstName:string;
    lastName:string;
    ages:number;
    dni:number;
    isTopTen:boolean;
    average:number;
    califications:number[];

    constructor(
        firstName:string,
        lastName:string,
        ages:number,
        dni:number,
        califications:number[]
    ){
        this.firstName=firstName;
        this.lastName=lastName;
        this.ages=ages;
        this.dni=dni;
        this.califications=califications;
        this.average= this.calcAverage(this.califications);
        this.isTopTen=this.isApproved(this.average);

    }   
    calcAverage(calif:number[]):number {
        let average:number = 0;
        for (let i = 0; i < calif.length; i++){
            average = average + calif[i];;
        }
        average=(average/calif.length);
        return average;
    }

    isApproved(average:number):boolean {
        if (average>=4) return true;
        return false;
    }
}