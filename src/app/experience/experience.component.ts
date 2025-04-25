import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  logoPath: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'EXPERIENCE.JOB1_TITLE',
      company: 'EXPERIENCE.JOB1_COMPANY',
      logoPath: 'assets/images/companies/stc-bank.png',
      period: 'EXPERIENCE.JOB1_PERIOD',
      location: 'EXPERIENCE.JOB1_LOCATION',
      description: 'EXPERIENCE.JOB1_DESCRIPTION',
      responsibilities: [
        'EXPERIENCE.JOB1_RESP1',
        'EXPERIENCE.JOB1_RESP2',
        'EXPERIENCE.JOB1_RESP3',
        'EXPERIENCE.JOB1_RESP4',
        'EXPERIENCE.JOB1_RESP5',
        'EXPERIENCE.JOB1_RESP6',
        'EXPERIENCE.JOB1_RESP7',
        'EXPERIENCE.JOB1_RESP8'
      ]
    },
    {
      title: 'EXPERIENCE.JOB2_TITLE',
      company: 'EXPERIENCE.JOB2_COMPANY',
      logoPath: 'assets/images/companies/emcrey.png',
      period: 'EXPERIENCE.JOB2_PERIOD',
      location: 'EXPERIENCE.JOB2_LOCATION',
      description: 'EXPERIENCE.JOB2_DESCRIPTION',
      responsibilities: [
        'EXPERIENCE.JOB2_RESP1',
        'EXPERIENCE.JOB2_RESP2',
        'EXPERIENCE.JOB2_RESP3',
        'EXPERIENCE.JOB2_RESP4',
        'EXPERIENCE.JOB2_RESP5',
        'EXPERIENCE.JOB2_RESP6'
      ]
    },
    {
      title: 'EXPERIENCE.JOB3_TITLE',
      company: 'EXPERIENCE.JOB3_COMPANY',
      logoPath: 'assets/images/companies/riyadh-bank.png',
      period: 'EXPERIENCE.JOB3_PERIOD',
      location: 'EXPERIENCE.JOB3_LOCATION',
      description: 'EXPERIENCE.JOB3_DESCRIPTION',
      responsibilities: [
        'EXPERIENCE.JOB3_RESP1',
        'EXPERIENCE.JOB3_RESP2',
        'EXPERIENCE.JOB3_RESP3'
      ]
    }
  ];
}