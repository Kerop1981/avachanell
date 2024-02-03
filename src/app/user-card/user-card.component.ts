import { Component, Input } from '@angular/core';
@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() 
  data!: { 
    id:number, 
    name:string,
    email:string, 
    phone:string 
  }
}
