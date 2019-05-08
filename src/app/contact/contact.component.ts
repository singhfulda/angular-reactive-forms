import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 contactForm: FormGroup;
  countries = ['USA', 'Germany', 'Italy', 'France'];

  requestTypes = ['Claim', 'Feedback', 'Help Request'];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroupWithBuilder(formBuilder);
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl()
      }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      personalData: formBuilder.group({
        email: 'defaul@email.com',
        mobile: '',
        country: ''
      }),
      requestType: '',
      text: ''
    });
  }
}