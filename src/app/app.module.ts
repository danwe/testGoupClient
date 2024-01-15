import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './featues/pages/home-page/continers/home-page/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { DropDownCurrencyComponent } from './featues/components/dropDown/drop-down-currency/drop-down-currency.component';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputNumberComponent } from './featues/components/input/input-number/input-number.component';
import { UsersComponent } from './core/services/users/users.component';
import { SideLeftComponent } from './featues/pages/side-left/side-left.component';
import { ListWorkerComponent } from './featues/pages/side-left/list/list-worker/list-worker.component';
import { ShortDetailsComponent } from './shared/components/short-details/short-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DropDownCurrencyComponent,
    InputNumberComponent,
    UsersComponent,
    SideLeftComponent,
    ListWorkerComponent,
    ShortDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
