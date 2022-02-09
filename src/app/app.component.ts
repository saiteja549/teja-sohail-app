import { Component, OnInit } from '@angular/core';
import { LoginClass, SignUpClass } from 'src/Classes/Credentials';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  
  loginFlag=true;
  signupFlag=false;
  lerrorFlag=false;
  serrorFlag=false;
  successFlag=false;
  
  errorMessage="";
  successMessage="";

  mockdata: Array<LoginClass> = [];

  loginDetails:LoginClass = new LoginClass();
  signupDetails:SignUpClass = new SignUpClass();
  constructor(){
    let data:LoginClass = new LoginClass();
    data.username="abc@gmail.com";
    data.password="abc@123";
    this.mockdata.push(data);
  }
  ngOnInit(): void {
  }

  LoginMenuClick(){
    this.loginFlag=true;
    this.signupFlag=false;
  }

  SignUpMenuClick(){
    this.signupFlag=true;
    this.loginFlag=false;
  }

  SignUpBtnClick(){
    if(this.signupDetails.lastname==""||this.signupDetails.firstname==""||this.signupDetails.email==""||this.signupDetails.spassword==""|| this.signupDetails.cpassword==""){
      this.serrorFlag= true;
      this.errorMessage="*Please fill all the mandatory fields";
      return;
    }

    else if(this.signupDetails.cpassword != this.signupDetails.spassword){
      this.serrorFlag=true;
      this.errorMessage="*Passwords doesn't match";
      return;
    }

    else if(!this.validateEmail(this.signupDetails.email)){
      this.serrorFlag=true;
      this.errorMessage="*Please enter a valid email";
      return;
    }

    else if(this.signupDetails.cpassword.length<6){
      this.serrorFlag=true;
      this.errorMessage="*Password must be atleast 6 charecters";
      return;
    }

    else{
      this.serrorFlag=false;
      let data=new LoginClass();
      data.username=this.signupDetails.email;
      data.password=this.signupDetails.spassword;
      this.mockdata.push(data);
      this.successFlag=true;
      this.successMessage="User Signed Up Successfully, please Login";
      setTimeout(() => {
        this.openLogin();
      }, 3000);
    }
  }

  openLogin(){
    this.signupFlag=false;
    this.loginFlag=true;
  }

  LoginBtnClick(){
    if(this.loginDetails.username==""||this.loginDetails.password==""){
      this.lerrorFlag=true;
      this.errorMessage="*UserName and Password are required";
    }
    else if(!this.validateLoginCredentials(this.loginDetails.username,this.loginDetails.password)){
      this.lerrorFlag= true;
      this.errorMessage="*Invalid Login Credentials";
    }
    else{
      debugger;
      this.lerrorFlag=false;
      //replace here with sohail's url
      window.open("https://www.codegrepper.com/code-examples/javascript/typescript+open+url+in+new+tab","_self");
    }
  }

  validateEmail(email:any){
    return true;
  }

  validateLoginCredentials(username:string,password:string){
    if(this.mockdata.filter(ele=>ele.username==username.trim() && ele.password==password.trim())){
      return true;
    }
    else{
      return false;
    }

  }

}
