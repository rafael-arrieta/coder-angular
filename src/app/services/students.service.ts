import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { BehaviorSubject, Observable, take, map, catchError,throwError } from 'rxjs';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students  = new BehaviorSubject<Student[]> (
  []);

  public students$: Observable<Student[]>


  constructor(
    private httpClient: HttpClient,

  ) {
    this.students$ = this.students.asObservable() 
    this.getStudentsFromAPI().subscribe(stud => {
      this.students.next(stud);
    })
  }

  // addStudent(newStudentData: Omit<Student, 'id' | 'active'>): void {

  //   this.students.pipe(take(1)).subscribe((students)=>{

  //     const lastId = students[students.length - 1]?.id||0;

  //     this.students.next([
  //       ...students,
  //       new Student(
  //         newStudentData.firstName, 
  //         newStudentData.lastName, 
  //         newStudentData.age,
  //         newStudentData.dni,
  //         lastId + 1,true),
  //     ])
  //   })
  // }

  // addStudent(student: Omit<Student, 'id' | 'active'>) {
  //   this.httpClient.post(`https://63bdfb6f585bedcb36a57d1e.mockapi.io/students`, student).subscribe({
  //     next: _ => {
  //       let newList = this.students.getValue();
  //       let lastId = newList[newList.length]?.id||0;
  //       lastId.toString

  //       newList.push(student);
  //       this.students.next([
  //         ...newList,
  //         new Student(
  //           lastId,
  //           student.firstName,
  //           student.lastName, 
  //           student.age,
  //           student.dni,
  //           true),
  //         ]
  //       );
  //     },
  //     error: _ => {
  //       alert('Error!!');
  //     }
  //   });
  // }
  
  addStudent(student: Omit<Student, 'id' | 'active'>) {
    this.httpClient.post(`https://63bdfb6f585bedcb36a57d1e.mockapi.io/students`, student).subscribe({
      next: _ => {
        let newList = this.students.getValue();
        let lastId = newList[newList.length-1]?.id||0;
        newList.push(new Student(((lastId+1).toString()), student.firstName, student.lastName, student.age, Number(student.dni), true));
        this.students.next(newList);
      },
      error: _ => {
        alert('Error!!');
      }
    });
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

  deleteStudent(student: Student) {
    this.httpClient.delete<Student[]>(`https://63bdfb6f585bedcb36a57d1e.mockapi.io/students/${student.id}`).subscribe(_=> {
      let newList = this.students.getValue().filter( std => std.id !== student.id);
      this.students.next(newList);
    });
  }

  getStudentById(id: number): Observable<Student | null> {
    return this.students$.pipe(
      take(1),
      map((students)=>students.find((std) => std.id === id) || null)
    )
  }
  

  
  getStudentsFromAPI():Observable<Student[]> {
    return this.httpClient.get<Student[]>('https://63bdfb6f585bedcb36a57d1e.mockapi.io/students',
    {
      headers : new HttpHeaders ({
        'content-type' : 'application/json'
      })
    }).pipe(catchError(err => throwError(() => new Error('Error!'))));
  }
}


/*

https://docs.google.com/presentation/d/1ffQVg77-tsTVVsurAUCf6IkU81ISIdLF/edit?usp=share_link&ouid=104547382208181622841&rtpof=true&sd=true

https://github.com/geovasanlo/erp-ferreteria

*/