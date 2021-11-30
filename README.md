# FrontendRentaCar
```
- Instalar Angular CLI 
npm install -g @angular/cli

- Generar app
ng new FrontendRentaCar

- Generar módulos de seguridad, administración y contacto
ng generate module modulos/seguridad --routing
ng generate module modulos/administracion --routing
ng generate module modulos/contacto --routing

- Generar componente para la identificación de usuarios o login
ng g component  modulos/seguridad/identificacion

- Generar componente para el registro de usuarios
ng g component  modulos/administracion/usuarios/crear-usuario

- Generar componente para el envío de mensaje de contacto
ng g component modulos/contacto/envio-mensaje

- Generar componentes comunes
ng g c plantilla/barra-navegacion
ng g c plantilla/pie-pagina
ng g c plantilla/inicio
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
