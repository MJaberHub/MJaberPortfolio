import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailData } from '../models/email.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmailService {
    private apiUrl = environment.apiSendEmailUrl;

    constructor(private http: HttpClient) { }

    /**
     * Sends an email with the provided form data
     * @param emailData The form data containing name, email and message
     * @returns An Observable that completes when the email is sent
     */
    sendEmail(emailData: EmailData): Observable<any> {
        return this.http.post(this.apiUrl, emailData);
    }
}