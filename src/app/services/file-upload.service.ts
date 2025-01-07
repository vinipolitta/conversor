import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const uploadData = new FormData();
    uploadData.append('file', file, file.name);
    return this.http
      .post(`${this.apiUrl}/word-to-pdf`, uploadData, { responseType: 'json' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erro ao enviar arquivo:', error);
          return throwError(error);
        })
      );
  }
}
