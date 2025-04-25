import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let translateService: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const translateSpy = jasmine.createSpyObj('TranslateService', [
      'addLangs',
      'setDefaultLang',
      'getBrowserLang',
      'use',
      'getDefaultLang',
      'getLangs'
    ]);

    translateSpy.getBrowserLang.and.returnValue('en');
    translateSpy.getDefaultLang.and.returnValue('en');
    translateSpy.getLangs.and.returnValue(['en', 'fr']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        { provide: TranslateService, useValue: translateSpy }
      ]
    });
    translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize translation service', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(translateService.addLangs).toHaveBeenCalledWith(['en', 'fr']);
    expect(translateService.setDefaultLang).toHaveBeenCalledWith('en');
    expect(translateService.getBrowserLang).toHaveBeenCalled();
    expect(translateService.use).toHaveBeenCalledWith('en');
  });
});
