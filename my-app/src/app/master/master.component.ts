import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  userName:string = '';
  counter:number = 0;
  userNamePlaceholder: string = 'Enter primary user name';
  posts:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.GetEmployeeData().subscribe(data=>{
      console.log(data);
      this.posts = data;
    });
  }


  increment_click(){
    this.counter = this.counter + 1;
  }

}
