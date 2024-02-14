import { Component, OnInit} from '@angular/core';
import { Observable, map } from 'rxjs';
import { User, UsersApiService } from 'src/backend-api/users.api.Service'
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users$! : Observable<User[]>;

constructor(private usersApi:UsersApiService){}

ngOnInit(): void {
    this.users$ = this.usersApi.getusersEndPoint();
}


addUserToList(name: string): void {
  this.users$ = this.users$.pipe(
    map(users => {
    const newUser: User = {
      id: users.length + 1,
      name: name,
      email: "",
      phone: ""
    };
      return [...users, newUser];
    })
  );
}
}



