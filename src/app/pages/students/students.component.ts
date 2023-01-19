import { Component, OnDestroy, OnInit } from '@angular/core'; // ok
import { MatDialog } from '@angular/material/dialog'; // ok
import { Student } from 'src/app/models/student.model'; // ok
import { DialogStudentComponent } from '../../shared/components/dialog-student/dialog-student.component'; // ok
import { Observable, Subject } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})

export class StudentsComponent implements OnDestroy{
  displayedColumns = [
    'id','firstAndLastName','dni','age','active','detail','edit','delete',
  ];

  students: Observable<Student[]>;

  private destroyed$ = new Subject()

  constructor(
    private readonly studentsService: StudentsService,
    private readonly dialogService: MatDialog)

    {
      this.students = this.studentsService.students$;

      //console.log(this.studentsService.students$.pipe());
      
    }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

  editStudent(student: Student) {
    const dialog = this.dialogService.open(DialogStudentComponent, {
      data: student,
    });

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.editStudent(student.id, data);
      }
    });
  }
  //falta el método editar estudiante del "student.serveice.ts"

  displayVariable: number = 0;
  nextDisplayVariable: number = this.displayVariable + 10;

  addStudent(){
    const dialog = this.dialogService.open(DialogStudentComponent);
    dialog.afterClosed().subscribe((data) => {
      if(data){
        this.studentsService.addStudent({
          firstName: data.firstName,
          lastName: data.lastName,
          age: data.age,
          dni: data.dni
        })
      }
    });
  }



  deleteStudent(student: Student) {
    this.studentsService.deleteStudent(student);
  }

  detailStudent(element: Student){
    //console.log(this.studentsService.getStudentById(element.id));
  }

  nextPage() {
    // if ( >= this.nextDisplayVariable) {
    //   this.displayVariable = this.displayVariable + 10;
    //   this.nextDisplayVariable = this.displayVariable + 10;
    // }
  }

  previusPage() {
    // if (this.displayVariable !== 0) {
    //   this.displayVariable = this.displayVariable - 10;
    //   this.nextDisplayVariable = this.displayVariable + 10;
    // }
  }
}
