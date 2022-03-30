import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { HomeComponent } from 'src/components/home/home.component';
import { OurWorkComponent } from 'src/components/our-work/our-work.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-our-work', component: OurWorkComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-page-not-found', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
