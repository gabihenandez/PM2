import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    usuario:'',
    password:'',
    apellido: '',
    email:'',
    passwordConfirm:'',
  }

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
 
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
 
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }

  onKeyUpApellido(event: any){
    let newValue = event.target.value;
    console.log(newValue);
 
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
 
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }

  onKeyUpEmail(event: any){
    let newValueEmail = event.target.value;
    //console.log(newValueEmail);
 
    let regExpEmail = new RegExp('^[A-Za-z0-9@,._*-]+$');
 
    if(!regExpEmail.test(newValueEmail)){
      event.target.value = newValueEmail.slice(0, -1);
    }
  }

  async onSubmit(_form: NgForm) {
    console.log(this.user);
    alert(this.user.usuario + '_' + this.user.password);
    if(this.user.passwordConfirm != this.user.password){
      alert("Las contraseñas deben de coincidir");
    }
  } 


}
