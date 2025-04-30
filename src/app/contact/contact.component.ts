import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;

  submitted = false;
  isError = false;
  isLoading = false;

  constructor(private emailService: EmailService) { }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.contactForm?.valid) {
      return;
    }

    this.isLoading = true;
    this.isError = false;

    const data = {
      name: this.contactForm.value.name?.trim(),
      email: this.contactForm.value.email?.trim(),
      subject: this.contactForm.value.subject?.trim(),
      message: this.contactForm.value.message?.trim()
    };

    this.emailService.sendEmail(data).subscribe({
      next: () => {
        this.submitted = true;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error sending email:', err);
        this.isError = true;
        this.isLoading = false;
      }
    });
  }
}