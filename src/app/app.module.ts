import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersApiService } from 'src/backend-api/users.api.Service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    SearchComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
 
    
  ],
  providers: [UsersApiService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
