import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  submitted = false;

  onSubmit(): void {
    // In a real application, you would send the form data to a backend service
    this.submitted = true ;
  }
}