import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

export function configureTestModule(component: any) {
  TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientModule,
      TranslateModule.forRoot()
    ],
    declarations: [
      component,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      AboutComponent,
      ExperienceComponent,
      SkillsComponent,
      ContactComponent,
      LanguageSwitcherComponent
    ],
    providers: [
      TranslateService,
      TranslateStore
    ]
  });
} 