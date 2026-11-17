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
      description: 'Modules',
      highlights: [
        'Year 1: Introduction to Structural and Functional Biochemistry, Physiological Biochemistry, Microbial Biotechnology 1, Cell Biology, Molecular Biology, Practical and Employability Skills.',
        'Year 2: Methods in Biochemistry, Metabolic Biochemistry, Structural and Functional Biochemistry, Molecular Biology and Functional Genomics, Molecular Cell Biology, Microbial Biotechnology 2.',
        'Year 3: Sandwich Year - Industrial Placement.',
        'Year 4: Advanced Structural and Functional Biochemistry, Biochemistry Symposia, Advanced Cell and Molecular Biology, Cancer, Biochemistry Research Project.'
      ]
    }
  ];

  toggle(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}