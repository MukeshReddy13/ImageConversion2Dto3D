import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageConversionComponent } from './image-conversion/image-conversion.component';

const routes: Routes = [
  { path: 'image-conversion', component: ImageConversionComponent },
  // Define your routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
