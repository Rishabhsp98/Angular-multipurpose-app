import { Component, OnInit } from '@angular/core';
import example from '../../../assets/users.json'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  public users = [];
  constructor() { 
    this.users = example;
  }

  ngOnInit(): void {
    console.log(example);
  }

}
