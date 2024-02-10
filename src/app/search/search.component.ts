import { Component ,EventEmitter,Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 @Output() addUser = new EventEmitter<string>();

 newUserForm: FormGroup

 constructor(private formBuilder: FormBuilder){
  this.newUserForm = this.formBuilder.group({
    name:['',Validators.required]
  });
 }
 addUserToList(){
  if(this.newUserForm.valid)
   this.addUser.emit(this.newUserForm.value.name)
   this.newUserForm.reset();
 }
 
}
// myForm: FormGroup = new FormGroup({
//   "userName": new FormControl("",Validators.required),
//   "userEmail": new FormControl("",[
//       Validators.required,
//       Validators.email
//   ]),
//   "userPhone": new FormControl("",Validators.pattern("[0-9]{10}"))

// });
