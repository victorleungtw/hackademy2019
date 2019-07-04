import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { PostLogonComponent } from './post-logon/post-logon.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'post-logon', component: LoyaltyComponent },
  { path: 'loyalty', component: PostLogonComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
