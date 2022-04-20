import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  contact : {id:any, name:string, description:string, email:string} = {id: null, name: "", description: "", email: ""};
  constructor() { }

  ngOnInit(): void {
  }
  createContact(){
    
  }
}
