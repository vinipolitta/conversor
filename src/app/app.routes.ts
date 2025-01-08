import { Routes } from '@angular/router';
import { NavService } from './services/nav.service';

// Inicializa uma instância do NavService para obter as rotas
const navService = new NavService();

export const routes: Routes = [
  ...navService.getRoutes(), // Obtém as rotas do NavService
  { path: '**', redirectTo: '/home' }, // Redireciona rotas não reconhecidas
];
