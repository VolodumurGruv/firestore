import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowImagesComponent } from './components/show-images/show-images.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';

@NgModule({
  declarations: [AppComponent, ShowImagesComponent, UploadImagesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
