import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('subjectInput') subjectInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;
  submitted = false;
  isError = false;
  isLoading = false;

  constructor(private emailService: EmailService) { }

  onSubmit(event: Event) {
    event.preventDefault();
    this.isLoading = true;
    this.isError = false;

    const data = {
      name: this.nameInput.nativeElement.value,
      email: this.emailInput.nativeElement.value,
      message: this.messageInput.nativeElement.value,
      subject: this.subjectInput.nativeElement.value
    };

    //call aws api to send the email
    this.emailService.sendEmail(data).subscribe({
      next: (res) => {
        this.submitted = true;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isError = true;
        this.isLoading = false;
      }
    });
  }
}