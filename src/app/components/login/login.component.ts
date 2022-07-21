import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  loading = false;
  submitted = false;
  username: any;
  password: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]))
    });
  }

  onLogin(data: any) {
    // console.log(data);
    if (data.username == "sntuser" && data.password == "Snt@1234") {
      // console.log("Login Sucessful....");
      localStorage.setItem("user", JSON.stringify(data));
      this.router.navigate(['/dashboard'])
    }
    else {
      alert("Wrong Credentials.....")
    }

  }

}
