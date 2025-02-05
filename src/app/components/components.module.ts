import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardPostComponent } from './card-post/card-post.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    CardPostComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CardPostComponent,
    LayoutComponent
  ]
})
export class ComponentsModule { }