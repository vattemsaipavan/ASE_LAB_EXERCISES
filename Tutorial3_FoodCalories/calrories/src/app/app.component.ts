import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, EmailValidator} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calrories';
  addForm: FormGroup;
  onRegister() {
		  
	  }

	  onLogin() {
      
    }
}
