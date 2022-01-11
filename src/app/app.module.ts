import { SpinnerComponent } from './spinner/spinner.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContinentsComponent } from './continents/continents.component';
import { CountiresComponent } from './countires/countires.component';
import { IndianStatesComponent } from './indian-states/indian-states.component';
import { FormsModule } from '@angular/forms';
import { httpIntecptorProviders } from './httpIntecptorIndex';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContinentsComponent,
    SpinnerComponent,
    CountiresComponent,
    IndianStatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  providers: [httpIntecptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
