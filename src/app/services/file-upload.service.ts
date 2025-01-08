import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  uploadFile(file: File, conversionType: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('conversionType', conversionType);
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    return this.http.post(`${this.apiUrl}/upload`, formData, { headers });
  }
}
