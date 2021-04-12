import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';


const base_url: string = 'http://localhost:3000/api/';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {

  }


}
