import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonPhoneComponent } from './person-phone/person-phone.component';
import { PersonPhoneService } from './person-phone/services/person-phone.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path: 'person-phone',
  children: [{
    path: '',
    component: PersonPhoneComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    ],
  exports: [RouterModule],
  declarations: [PersonPhoneComponent],
  providers: [PersonPhoneService]
})
export class AppRoutingModule { }
