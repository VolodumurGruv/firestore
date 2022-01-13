import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowImagesComponent } from './components/show-images/show-images.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';

const routes: Routes = [
  { path: '', redirectTo: '/upload', pathMatch: 'full' },
  { path: 'upload', component: UploadImagesComponent },
  { path: 'images', component: ShowImagesComponent },
  { path: '**', redirectTo: '/upload', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
