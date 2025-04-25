import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';

describe('AppComponent', () => {
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [TranslateService]
    });
    translateService = TestBed.inject(TranslateService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize translation service', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(translateService.getDefaultLang()).toBe('en');
    expect(translateService.getLangs()).toContain('en');
    expect(translateService.getLangs()).toContain('fr');
  });
});
