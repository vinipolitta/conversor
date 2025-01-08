import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CustomToastComponent implements OnInit {
  @Input() message: string = '';
  @Input() title?: string;
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';
  @Input() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';
  show = false;

  ngOnInit() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

  getClass() {
    return {
      'toast-success': this.type === 'success',
      'toast-error': this.type === 'error',
      'toast-warning': this.type === 'warning',
      'toast-info': this.type === 'info',
      'top-left': this.position === 'top-left',
      'top-right': this.position === 'top-right',
      'bottom-left': this.position === 'bottom-left',
      'bottom-right': this.position === 'bottom-right'
    };
  }
}
