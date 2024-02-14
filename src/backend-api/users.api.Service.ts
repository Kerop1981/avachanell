import { Observable,of } from "rxjs";

export interface User {
    id: number,
    name: string,
    email: string,
    phone: string,
}

let id = 0;
const usrArr = [];
for (let i = 0; i < 100; i++){
    usrArr[i] = {
     id: i,
     name: "Leanne Graham",
     email: "Sincere@april.biz",
     phone: "1-770-736-8031 x56442",
    }
}
const users = [...usrArr]

export class UsersApiService{
    getusersEndPoint(): Observable<User[]> {
        return of(users)
    }
    
}