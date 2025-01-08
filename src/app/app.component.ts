import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FileUploadComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conversor';
}
