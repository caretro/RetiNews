import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsWidgetComponent } from './news-widget/news-widget.component';
import { MenuComponent } from './menu/menu.component';
import { NullablePipe } from '../pipes/nullable.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NewsWidgetComponent,
    MenuComponent,
    NullablePipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NewsWidgetComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
