import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducstListComponent } from './components/producst-list/producst-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProducstListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
