import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { generateId } from 'src/share/genericFunctions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
path:string;
msgError:string;
image:string;

constructor(private formBuilder:FormBuilder , private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.path=this.router.url;
    this.signupForm=this.formBuilder.group({
      firstName:["",[Validators.required,Validators.minLength(3)]],
      lastName:["",[Validators.required,Validators.minLength(3)]],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      img:[""],
    })
  }
  signup(){
    console.log(this.signupForm.value);
  
    this.signupForm.value.role = (this.path == "/Subscription")? "user" : "Admin";
    this.userService.signup(this.signupForm.value,this.signupForm.value.img).subscribe((response)=>{
 alert(response.message)
      if (response.message=="Error") {
      this.msgError="Email Exist";

      } else {

     this.router.navigate(["SignIN"]);
        
      }
    });

  
    
  }
  onImageSelected(event:Event){

    const file=(event.target as HTMLInputElement).files[0];
    console.log(file);
    this.signupForm.patchValue({img:file});
    this.signupForm.updateValueAndValidity();
    const reader=new FileReader();
    reader.onload = () =>{
      this.image=reader.result as string;
    } 
    reader.readAsDataURL(file);

    

  }
}
