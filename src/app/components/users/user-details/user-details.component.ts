import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule,MatCardModule,ReactiveFormsModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule,NgxMatIntlTelInputComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})

export class UserDetailsComponent implements OnInit{
  @ViewChild(NgxMatIntlTelInputComponent) phoneInput: any;
  userDetailsForm!:FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    this.userDetailsForm = this.fb.group({
      firstName:[null,Validators.required],
      lastName:[null,Validators.required],
      email:[null,Validators.required],
      phone:[null,Validators.required],
    })
  }

  getFormControl(controlName: string) {
    return this.userDetailsForm.get(controlName);
  }

  onSubmit(){
    console.log(this.userDetailsForm.value);
  }

  onBack(){
    history.back();
  }

}
