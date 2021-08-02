import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NoDataComponent } from './no-data/no-data.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FilterComponent,
    NoDataComponent,
    CardComponent

  ],
  imports: [
    CommonModule,
    ButtonsModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FilterComponent,
    NoDataComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
