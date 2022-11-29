import { Component, OnInit } from '@angular/core';
import { Student} from 'src/app/models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {



  students : Student[] = [
    new Student( 'Carlos','Bolsonaro',32,33355354,[1,5,3,4,6]),
    new Student( 'Macarena','Higuain',21,40378426,[9,9,10]),
    new Student( 'Julian','Abregovich',18,44123462,[2,10,8]),
    new Student( 'Tobias','Sanchez',22,42365432,[9,9,5]),
    new Student( 'Camila','Perez',26,39454664,[8,10,8]),
    new Student( 'Leandro','Tornelo',42,28164579,[2,1,5])
  ];
  
  constructor(){}

  ngOnInit(): void {
    console.log(this.students[0].califications.join(' - '));

  }
  
}
