import { Component } from '@angular/core';
import { FileUploadService } from '../../services/service.file-upload';
@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.html',
  styleUrl: './upload.css',
})
export class Upload {
  file: File | null = null;
  preview: string | null = null;
  uploading = false;
  message = '';
  isError = false;

  constructor(private _service: FileUploadService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.message = '';
    this.file = null;
    this.preview = null;

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      this.showMessage('Solo se permiten imágenes.', true);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.showMessage('La imagen no puede superar 5 MB.', true);
      return;
    }

    this.file = file;
    this.preview = URL.createObjectURL(file);
  }

  async send(): Promise<void> {
    if (!this.file) return;
    this.uploading = true;
    this.message = '';

    try {
      await this._service.uploadFile(this.file);
      this.showMessage('Fichero subido correctamente ✅', false);
    } catch (error) {
      console.error(error);
      this.showMessage('Error al subir el fichero', true);
    } finally {
      this.uploading = false;
    }
  }

  private showMessage(text: string, isError: boolean): void {
    this.message = text;
    this.isError = isError;
  }
}
