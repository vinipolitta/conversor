import { Component } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '../../shared/design-system/button/button.component';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-file-upload',
  imports: [CommonModule, HttpClientModule, ButtonComponent],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  constructor(
    private fileUploadService: FileUploadService,
    private toastService: ToastService
  ) {}
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          console.log(response);

          this.toastService.showSuccess('Arquivo enviado com sucesso!');
        },
        (error) => {
          this.toastService.showError('Selecione um arquivo primeiro.');
        }
      );
    }
  }
}
