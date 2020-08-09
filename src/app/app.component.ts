import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'
import {passchecker} from './Validators/passchecker'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reactiveform:FormGroup;
  onsubmitted:boolean=false;
  
  
  constructor(private formbuilder:FormBuilder){}
  ngOnInit(){
    
    this.reactiveform=this.formbuilder.group({
      firstName:['',[Validators.required,Validators.minLength(2)]],
      lastName:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword:['',Validators.required],
      termsandcondition:[false,Validators.requiredTrue]
    },{
      validators:passchecker('password','confirmpassword')
    })

  }

  get h(){
    return this.reactiveform.controls;
  }

  onSubmit(){
    this.onsubmitted=true;
    if(this.reactiveform.invalid){
      return
    }
      
    console.table(this.reactiveform.value);
    console.table(this.reactiveform);
    alert("Success signup\n"+ JSON.stringify(this.reactiveform.value));
    
    
  }

  onReset(){
    this.onsubmitted=false;
    this.reactiveform.reset();

  }
  
}
