import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule} from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    NoDataComponent,
    CardComponent
    
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
