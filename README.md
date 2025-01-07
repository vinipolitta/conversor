# Conversor

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

# Design System do Conversor de Arquivos Word para PDF

Este documento descreve o design system utilizado na aplicação Angular para converter arquivos Word em PDF. O design system foi criado para garantir consistência visual, facilidade de manutenção e escalabilidade.

## Objetivos do Design System

- **Consistência**: Garantir que todos os componentes da aplicação sigam um padrão visual coeso.
- **Reutilização**: Facilitar a criação e reutilização de componentes em diferentes partes da aplicação.
- **Escalabilidade**: Permitir a adição de novos componentes e estilos sem comprometer a estrutura existente.
- **Facilidade de Manutenção**: Simplificar a manutenção e atualização dos estilos da aplicação.

## Estrutura do Projeto

A estrutura do projeto foi organizada para separar os estilos globais dos componentes específicos, tornando mais fácil gerenciar e expandir o design system.

```plaintext
src/
├── app/
│   ├── components/
│   │   └── file-upload/
│   │       ├── file-upload.component.html
│   │       ├── file-upload.component.scss
│   │       └── file-upload.component.ts
│   ├── design-system/
│   │   ├── button/
│   │   │   ├── button.component.html
│   │   │   ├── button.component.scss
│   │   │   └── button.component.ts
├── styles/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _global.scss
│   └── styles.scss


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
