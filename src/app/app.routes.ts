import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { CvComponent } from './pages/cv/cv.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'cv', component: CvComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];