import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Error handler
import { GlobalErrorComponent } from '../errorhandler/global-error.component';
import { PageNotFoundComponent } from '../errorhandler/page-not-found.component';

// Pages
import { AppComponent } from '../app/app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'error', component: GlobalErrorComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
