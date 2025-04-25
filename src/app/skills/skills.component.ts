import { Component } from '@angular/core';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'SKILLS.CATEGORY1',
      skills: [
        { name: 'C#', level: 95 },
        { name: '.NET Framework', level: 90 },
        { name: '.NET Core', level: 90 },
        { name: 'ASP.NET', level: 85 },
        { name: 'WCF', level: 80 },
        { name: 'Entity Framework', level: 85 },
        { name: 'ADO.NET', level: 90 },
      ]
    },
    {
      name: 'SKILLS.CATEGORY2',
      skills: [
        { name: 'Microservices', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'OpenShift', level: 75 },
        { name: 'CI/CD pipelines', level: 80 },
        { name: 'Kafka', level: 85 },
        { name: 'Elasticsearch', level: 75 },
      ]
    },
    {
      name: 'SKILLS.CATEGORY3',
      skills: [
        { name: 'MS SQL', level: 90 },
        { name: 'SSIS Packages', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'Angular', level: 75 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 80 },
      ]
    },
    {
      name: 'SKILLS.CATEGORY4',
      skills: [
        { name: 'Temenos T24', level: 80 },
        { name: 'Payment Systems', level: 90 },
        { name: 'Payment Gateways', level: 85 },
        { name: 'Card Management', level: 80 },
        { name: 'SWIFT', level: 75 },
      ]
    }
  ];

  projectHighlights = [
    'SKILLS.PROJECT1',
    'SKILLS.PROJECT2',
    'SKILLS.PROJECT3',
    'SKILLS.PROJECT4',
    'SKILLS.PROJECT5',
    'SKILLS.PROJECT6'
  ];
}