import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-dialog-student',
  templateUrl: './dialog-student.component.html',
  styleUrls: ['./dialog-student.component.scss'],
})
export class DialogStudentComponent {
  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  ageControl = new FormControl('',[
    Validators.required, 
    Validators.pattern('^[0-9]*$'),
    Validators.minLength(2),
    Validators.maxLength(3),
  ])

  dniControl = new FormControl('',[
    Validators.required,
    Validators.pattern('^[0-9]*$'),
    Validators.minLength(6),
    Validators.maxLength(11),
  ])

  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    age: this.ageControl,
    dni: this.dniControl,
  });
  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Student | null
  ) {
    if (data) {
      this.studentForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
