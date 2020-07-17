import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private rb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.rb.group({
      fullname:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]],
      pwd:['',[Validators.required]],
      cpwd:['',[Validators.required]]
    })
  }

  register(form:FormGroup){
    if(form.valid){
      console.log(form.value);
    }
  }

}
