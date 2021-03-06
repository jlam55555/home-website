import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { PersonComponent } from './person/person.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cookbook', component: CookbookComponent },
  { path: 'cookbook/create', component: CookbookComponent, data: { create: true } },
  { path: 'cookbook/:recipe', component: CookbookComponent },
  { path: 'who', component: PersonComponent },
  { path: 'who/:name', component: PersonComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
