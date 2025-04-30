import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './contact.component';
import { EmailService } from '../services/email.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { configureTestModule } from '../test-helper';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let emailService: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [ContactComponent],
      providers: [
        EmailService
      ]
    });
    configureTestModule(ContactComponent);
    
    emailService = TestBed.inject(EmailService);
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
