import { Injectable } from '@angular/core';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { HomeComponent } from '../components/home/home.component';

// Interface que define o formato dos itens de navegação
interface NavItem {
  path: string;  // Caminho da rota
  title: string; // Título exibido no nav
  component: any; // Componente associado à rota
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  // Itens de navegação iniciais
  private navItems: NavItem[] = [
    { path: 'convert-to-pdf', title: 'Conversão para PDF', component: FileUploadComponent },
    { path: 'home', title: 'Home', component: HomeComponent },
  ];

  // Método para obter os itens de navegação
  getNavItems(): NavItem[] {
    return this.navItems;
  }

  // Método para adicionar um novo item de navegação
  addNavItem(navItem: NavItem) {
    this.navItems.push(navItem);
  }

  // Método para remover um item de navegação pelo caminho
  removeNavItem(path: string) {
    this.navItems = this.navItems.filter(item => item.path !== path);
  }

  // Método para converter os itens de navegação em rotas
  getRoutes() {
    return this.navItems.map(item => ({ path: item.path, component: item.component }));
  }
}
