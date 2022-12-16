import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts!: Contact;
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    ) { 
      this.createContactForm();

    }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
}

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      message: [''],
    })
  }

      //Form getters
      get nameField(){
        return this.contactForm.get('name')
      };
      get emailField(){
        return this.contactForm.get('email')
      };
      get phoneField(){
        return this.contactForm.get('phone')
      };
      get messageField(){
        return this.contactForm.get('message')
      };

}
