import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts!: Contact;
  contactForm!: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private phonePattern: any = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/


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
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]],
      phone: ['', [Validators.required, Validators.min(10), Validators.pattern(this.phonePattern)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
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
