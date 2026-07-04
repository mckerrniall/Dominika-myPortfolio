import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  company: string;
  role: string;
  years: string;
  logo: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  activeTab: 'notable' | 'other' = 'notable';
  selectedIndex: number | null = null;

  notableJobs: Job[] = [
    {
      company: 'Norbrook Laboratories',
      role: 'Analyst',
      years: '2022-2023',
      logo: 'assets/images/norbrook.jpg',
      description: 'sciency stuff in newry',
      highlights: [
        
      ]
    },
    {
      company: 'Almac Group',
      role: 'Placement Analyst',
      years: 'Short-Term Placement',
      logo: 'assets/images/almac.png',
      description:
        'Sciency stuff or whatever',
      highlights: [
        
      ]
    }
  ];

  otherJobs: Job[] = [
    {
      company: 'The Range',
      role: 'Part-Time Retail Assistant',
      years: '2024',
      logo: 'assets/images/theRange.jpg',
      description:
        'Part-time work in customer-facing environments, developing communication and teamwork skills.',
      highlights: [
        'Customer service experience',
        'Time management under pressure',
        'Cash handling / operations',
        'Team communication'
      ]
    }
  ];

  toggle(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}