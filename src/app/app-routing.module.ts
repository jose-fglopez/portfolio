import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [

  { path: 'about', component: AboutComponent , data: { animation: 'about' }},
  { path: 'skills', component: SkillsComponent, data: { animation: 'skills' } },
  { path: 'experience', component: ExperienceComponent, data: { animation: 'experience' } },
  { path: '', component: HomeComponent, data: { animation: 'home' } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
