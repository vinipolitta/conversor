import {
  Injectable,
  ComponentRef,
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
} from '@angular/core';
import { CustomToastComponent } from '../shared/design-system/custom-toast/custom-toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  private showToast(
    message: string,
    title: string = '',
    type: 'success' | 'error' | 'warning' | 'info',
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right'
  ) {
    const toastComponentRef: ComponentRef<CustomToastComponent> =
      this.componentFactoryResolver
        .resolveComponentFactory(CustomToastComponent)
        .create(this.injector);

    toastComponentRef.instance.message = message;
    toastComponentRef.instance.title = title;
    toastComponentRef.instance.type = type;
    toastComponentRef.instance.position = position;

    this.appRef.attachView(toastComponentRef.hostView);

    document.body.appendChild((toastComponentRef.hostView as any).rootNodes[0]);

    setTimeout(() => {
      this.appRef.detachView(toastComponentRef.hostView);
      toastComponentRef.destroy();
    }, 3000);
  }

  showSuccess(
    message: string,
    title?: string,
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  ) {
    this.showToast(message, title || '', 'success', position || 'top-right');
  }

  showError(
    message: string,
    title?: string,
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  ) {
    this.showToast(message, title || '', 'error', position || 'top-right');
  }

  showWarning(
    message: string,
    title?: string,
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  ) {
    this.showToast(message, title || '', 'warning', position || 'top-right');
  }

  showInfo(
    message: string,
    title?: string,
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  ) {
    this.showToast(message, title || '', 'info', position || 'top-right');
  }
}
