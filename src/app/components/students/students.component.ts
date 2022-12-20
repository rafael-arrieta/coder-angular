import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student} from 'src/app/models/student.model';
import { DialogStudentComponent } from '../dialog-student/dialog-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {



  students : Student[] = [
    new Student( 'carlos','bolsonaro','32','33355354',1,true),
    new Student( 'Macarena','higUain','21','40378426',2,false),
    new Student( 'julian','abregovich','18','44123462',3,true),
    new Student( 'tobias','SaNchez','22','42365432',4,true),
    new Student( 'Camila','perez','26','39454664',5,false),
    new Student( 'Leandro','Tornelo','42','28164579',6,false)
  ];
  
  constructor(private readonly dialogService:MatDialog){}

  ngOnInit(): void {
    
  }

  displayedColumns = ['id','firstAndLastName','dni', 'age','active','edit','delete'];

  displayVariable : number = 0;
  nextDisplayVariable : number = this.displayVariable + 10;

  addStudent(){
    const dialog = this.dialogService.open(DialogStudentComponent)

    dialog.afterClosed().subscribe((value) =>{

      if (value){
        const lastId = this.students[this.students.length - 1]?.id;
        
        this.students = [...this.students, new Student(value.firstName, value.lastName, value.age,value.dni, lastId + 1, true)]
      }

    })
  }

  removeStudent(element : Student){
    this.students = this.students.filter((std=>std.id !== element.id))
  }

  editStudent(student : Student){

    const dialog = this.dialogService.open(DialogStudentComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) =>{
      if(data){
        this.students = this.students.map((std) => std.id === student.id? { ...std, ...data} : std)
      }
    })
  }

  nextPage(){
    if(this.students.length >= this.nextDisplayVariable){
      this.displayVariable = this.displayVariable+10;
      this.nextDisplayVariable = this.displayVariable + 10;
    }
  }

  previusPage(){
    if (this.displayVariable !== 0){
        this.displayVariable = this.displayVariable -10;
        this.nextDisplayVariable = this.displayVariable + 10;
    }
  }
}
