import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleRecordValidatorComponent } from "./pages/single-record-validator/single-record-validator.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sdg-classifier'
  },
  {
    path: 'sdg-classifier',
    component: SingleRecordValidatorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
