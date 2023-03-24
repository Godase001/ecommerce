import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
 showLogin=false;
 akshay=new FormGroup({
  Name:new FormControl(),
  Passowrd:new FormControl(),
  Email:new FormControl()
 })
 akshay1=new FormGroup({
  email:new FormControl(),
  Password: new FormControl()

 })
 constructor(){}
 openLogin(){
  this.showLogin=true
 }
 opensignup(){
  this.showLogin=false
 }

}
