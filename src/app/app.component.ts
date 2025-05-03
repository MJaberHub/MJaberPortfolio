import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    private router: Router
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const canonicalUrl = environment.domainUrl + this.router.url.split('?')[0];
        let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
        if (!link) {
          link = this.renderer.createElement('link');
          link!.setAttribute('rel', 'canonical');
          this.renderer.appendChild(document.head, link);
        }
        link!.setAttribute('href', canonicalUrl);
      }
    });
  }
}