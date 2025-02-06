import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardPostComponent } from './card-post/card-post.component';
import { LayoutComponent } from './layout/layout.component';
import {StoriesComponent} from './stories/stories.component';
@NgModule({
  declarations: [
    CardPostComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    StoriesComponent
  ],
  exports: [
    CardPostComponent,
    LayoutComponent,
  ]
})
export class ComponentsModule { }