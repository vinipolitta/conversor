import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FileUploadService } from '../../services/file-upload.service';
import { ButtonComponent } from '../../shared/design-system/button/button.component';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;

  // Opções de conversão
  conversionOptions = [
    { id: 'wordToPdf', value: 'wordToPdf', label: 'Word para PDF' },
    { id: 'pdfToWord', value: 'pdfToWord', label: 'PDF para Word' },
    // Adicione mais opções aqui
  ];

  constructor(
    private fb: FormBuilder,
    private fileUploadService: FileUploadService,
    private toastService: ToastService
  ) {
    this.uploadForm = this.fb.group({
      conversionType: ['wordToPdf', Validators.required], // Valor padrão e validação
      file: [null, Validators.required],
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.uploadForm.patchValue({ file: this.selectedFile });
  }

  onUpload() {
    if (this.uploadForm.valid) {
      const { conversionType, file } = this.uploadForm.value;
      this.fileUploadService.uploadFile(file, conversionType).subscribe(
        (response) => {
          console.log(response);
          this.toastService.showSuccess(
            'Arquivo enviado com sucesso!',
            'Sucesso',
            'bottom-left'
          );
        },
        (error) => {
          this.toastService.showError(
            'Erro ao enviar o arquivo.',
            'Erro',
            'bottom-left'
          );
        }
      );
    } else {
      this.toastService.showError(
        'Selecione um arquivo e tipo de conversão primeiro.',
        'Erro',
        'bottom-left'
      );
    }
  }
}
