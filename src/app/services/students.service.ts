import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { BehaviorSubject, Observable, take, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students  = new BehaviorSubject<Student[]>(
  [
    new Student('carlos', 'bolsonaro', '32', '33355354', 1, true),
    new Student('Macarena', 'higUain', '21', '40378426', 2, false),
    new Student('julian', 'abregovich', '18', '44123462', 3, true),
    new Student('tobias', 'SaNchez', '22', '42365432', 4, true),
    new Student('Camila', 'perez', '26', '39454664', 5, false),
    new Student('Leandro', 'Tornelo', '42', '28164579', 6, false),
  ]);

  public students$: Observable<Student[]>

  constructor() {
    this.students$ = this.students.asObservable() 
  }

  addStudent(newStudentData: Omit<Student, 'id' | 'active'>): void {
    this.students.pipe(take(1)).subscribe((students)=>{

      const lastId = students[students.length - 1]?.id||0;

      this.students.next([
        ...students,
        new Student(
          newStudentData.firstName, 
          newStudentData.lastName, 
          newStudentData.age,
          newStudentData.dni,
          lastId + 1,true),
      ])
    })
  }

  editStudent(id: number, data: Partial<Student>): void {
    this,this.students.pipe(take(1)).subscribe((students)=>{
      this.students.next(
        students.map(
          (std) => std.id===id?
          new Student(
            data.firstName || std.firstName,
            data.lastName || std.lastName,
            data.age || std.age,
            data.dni || std.dni,
            std.id,
            data.active || std.active
          )
          :std
        )
      )
    })
  }

  deleteStudent(id: number): void {
    this.students.pipe(take(1)).subscribe((students)=>{
      this.students.next(students.filter((std)=> std.id !== id))
    })
  }

  getStudentById(id: number): Observable<Student | null> {
    return this.students$.pipe(
      take(1),
      map((students)=>students.find((std) => std.id === id) || null)
    )
  }


  /*
  getStudentsFromAPI():Observable<Student[]> {
    return this.httpClient.get<Student[]>()
  }
  */
}


/*

https://docs.google.com/presentation/d/1ffQVg77-tsTVVsurAUCf6IkU81ISIdLF/edit?usp=share_link&ouid=104547382208181622841&rtpof=true&sd=true

https://github.com/geovasanlo/erp-ferreteria

*/