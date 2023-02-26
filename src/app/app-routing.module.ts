import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WriteCodeComponent } from './write-code/write-code.component';

const routes: Routes = [
  { path: '', redirectTo: 'generateCode', pathMatch: 'full' },
  { path: 'generateCode', component: DashboardComponent },
  { path: 'writeCode', component: WriteCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
