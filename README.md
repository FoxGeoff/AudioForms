# AudioForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Project: Audio Impact Angular Forms

Ref: https://en.wikipedia.org/wiki/Enterprise_resource_planning

Bootstrap 4 admin Angular 6 (use this)
Ref: https://www.creative-tim.com/product/now-ui-dashboard-angular
Ref: https://demos.creative-tim.com/now-ui-dashboard-angular/dashboard
Ref: https://demos.creative-tim.com/now-ui-dashboard-angular/documentation/tutorial

## Check: Start Project
1. Run `>ng new AudioForms --audio --routing`
2. Run `> npm install`
## Check: Add Bootstrap 4.x
3. Run ```npm i bootstrap jquery popper.js```
4. Add to angular.json 
``` "styles": [
  "styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```
5. Add to angular.json 
```
"scripts": [
     "node_modules/jquery/dist/jquery.js",
     "node_modules/popper.js/dist/umd/popper.js",
     "node_modules/bootstrap/dist/js/bootstrap.js"
]
```
***
## Check: Add navigation side bar
* Ref. Off-canvas navigation side bar: 
https://www.jqueryscript.net/menu/Modern-Off-canvas-Accordion-Navigation-With-jQuery-sidenav.html

***
## Check: Generate the components
```
ng g c home
ng g c carousel
ng g c footer
ng g c navbar
ng g c product-item
ng g c product-detail
ng g c search
ng g c stars
```
***
## Check: Generate the Product Service
```
ng g s shared/product
```
***
## Check: Add app.component.html layout
## Check: Add navbar.component.html layout
## Check: Add footer.component.html layout
## Check: Add product-item.component.html layout
## Check:Update product-item and services
1. Add code to shared/product.service.ts
2. Add product model shared/product.ts
## Check: Add home.component.html and code and routing
## Check: Add Carousel
## Check: Add Advance Search html
## Check: Add Product-detail
## Check: Add Stars 
1. Run `npm i material-design-icons`
1. Add to styles.css `@import "../node_modules/material-design-icons/iconfont/material-icons.css";`
## Check: Add Product Image detail page
## Check: Develop Product Image model <<here @ 12:00 pm 8/1/2018>>
.