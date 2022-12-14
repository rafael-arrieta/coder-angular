import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  firstNameControl = new FormControl('',[
    Validators.required,
    Validators.minLength(4)
  ]);

  lastNameControl = new FormControl('',[
    Validators.required,
    Validators.minLength(4)
  ]);

  emailControl = new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  ageControl = new FormControl('',[
    //Cuando saco el required linea el ageControl da error con  la validacion custom
    //Además en el formulario aparecen 2 lineas de error-helper
    Validators.required, 
    Validators.minLength(2),
    Validators.maxLength(3),
    this.ageRangeValidator
  ])

  sexControl = new FormControl('')

  stateFormMessage:string = '';

  passwordControl = new FormControl('',[
    Validators.required,
    Validators.minLength(6),
  ]);

  rePasswordControl = new FormControl('',[
    Validators.required,
    this.passwordsMatchValidators,
    Validators.minLength(6)
  ]);

  registerStudentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    sex: this.sexControl,
    age: this.ageControl,
    password: this.passwordControl,
    rePassword: this.rePasswordControl
  }, {
    validators:[
      this.passwordsMatchValidators
    ]

  });

  constructor(){}
  ngOnInit(): void {}

  ageRangeValidator(control: FormControl){
    if(control.value<18){
      return{
        isOlder: true
      }
    }
    return null
  }

  passwordsMatchValidators(){
    return() => {
      if(this.passwordControl.value===this.rePasswordControl.value){
        return{
          passwordMatch: true
        }
      }
      return null
    }
  }
  
  onSubmit(){
    console.log(this.registerStudentForm.value);
    this.stateFormMessage = 'En proceso...';
    setTimeout(() => {
      this.registerStudentForm.reset();
      this.stateFormMessage = 'formulario enviado';
    },2500)
  }
}
