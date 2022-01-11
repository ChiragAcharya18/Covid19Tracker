import { IndianStatesComponent } from './indian-states/indian-states.component';
import { CountiresComponent } from './countires/countires.component';
import { ContinentsComponent } from './continents/continents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "continents", component: ContinentsComponent},
  {path: "countries", component: CountiresComponent},
  {path: "indian-states", component: IndianStatesComponent},
  {path: "**", component: ContinentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
