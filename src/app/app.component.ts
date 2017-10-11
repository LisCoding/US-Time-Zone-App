import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time_zone;
  date_now;
  time_pst(){
    this.date_now = new Date()
    this.time_zone = 'pst';
  }
  time_mst(){
    this.date_now = new Date()
    this.date_now.setHours(this.date_now.getHours()+ 1)
    this.time_zone = 'mst';
  }
  time_cst(){
    this.date_now = new Date()
    this.date_now.setHours(this.date_now.getHours()+ 2)
    this.time_zone = 'cst';
  }
  time_est(){
    this.date_now = new Date()
    this.date_now.setHours(this.date_now.getHours()+ 3)
    this.time_zone = 'est';
  }
  clear(){
  this.date_now = ""
  this.time_zone = '';
  }
}
