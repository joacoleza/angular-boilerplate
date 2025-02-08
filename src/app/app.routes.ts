import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CrewComponent } from './pages/crew/crew.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];
