import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
})
export class UploadImagesComponent implements OnInit {
  public imageName!: string;
  public path!: string;
  public imageForm = this.fb.group({ image: [''] });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  imageSelected(event: any) {
    const file: File = event.target.files[0];
    const formData = new FormData();

    formData.append('beefamily', file);
    this.imageName = file.name;
    this.imageForm.patchValue(formData);
  }

  onSubmit() {
    console.log(this.imageForm.value);
    this.imageForm.reset();
    this.imageName = '';
  }
}
