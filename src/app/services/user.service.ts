import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 userUrl:string="http://localhost:3000/allUsers";
 public token: string;
 private authStatusListener = new Subject<boolean>();
 private isUserAuthenticated = false;
 private name: string;

constructor(private httpClient:HttpClient, private router:Router) { }
getToken() {
  return this.token;
}
getAuthStatusListener() {
  return this.authStatusListener.asObservable();
}
isUserAuth() {
  return this.isUserAuthenticated;
}
getName() {
  return this.name;
}

signup(obj,img:File) {
  let formData = new FormData();
  formData.append("firstName",obj.firstName);
  formData.append("lastName",obj.lastName);
  formData.append("email",obj.email);
  formData.append("password",obj.password);
  formData.append("role",obj.role);

  formData.append("img",img);
  console.log(formData);
  return this.httpClient.post<{ message: string }>(this.userUrl + "/subscription", formData);
  }

  login(obj) {   
    this.httpClient.post<{ user: any, message: string }>(this.userUrl + "/signin", obj).subscribe(
      (res) => {
        console.log("here response", res);
       let connectedUser=res.user;
        const token = res.user.jwt;
        this.token = token;
        if (res.user) {
          this.isUserAuthenticated = true;
          this.name = res.user.firstName + "" + res.user.lastName;
          this.authStatusListener.next(true);
          localStorage.setItem('token', token);
          localStorage.setItem('name', this.name);
          localStorage.setItem('connectedUser',JSON.stringify(connectedUser));
          (res.user.role=="Admin") ? window.location.href="admin": window.location.href="";
        }
      }
    )
  }


  editProfile(newObj){
    return this.httpClient.put(this.userUrl +"/signin",newObj);
  }

  getUserById(id){
return this.httpClient.get<{userById:any}>(`${this.userUrl}/${id}`);
  }
}
