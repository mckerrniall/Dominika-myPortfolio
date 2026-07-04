import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface School {
  name: string;
  subtitle: string;
  years: string;
  logo: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

  selectedIndex: number | null = null;

  schools: School[] = [
    {
      name: 'Lismore Comprehensive School',
      subtitle: 'A-Levels',
      years: '2019 - 2021',
      logo: 'assets/images/Lismore.jpg',
      description:
        'Completed A-Levels with focus on STEM subjects, building strong analytical and problem-solving foundations.',
      highlights: [
        'Mathematics',
        'Physics',
        'Computer Science',
        'Academic Excellence Development'
      ]
    },
    {
      name: 'Liverpool John Moores University',
      subtitle: 'BSc Computer Science',
      years: '2021 - 2025',
      logo: 'assets/images/johnmoore.avif',
      description:
        'What you study here blah blah blah',
      highlights: [
        'Being stupud',
        'Science stuff',
        'Looking Gorg',
        'me me me me me'
      ]
    }
  ];

  toggle(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}