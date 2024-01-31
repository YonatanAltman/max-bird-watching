# Hello Routing

```typescript

import {HomeComponent} from '../home....';
import {StarWarsComponent} from '../home....';
import {Route, Routes} from "@angular/router";

const homeRoute: Route = {
  path: 'home', component: HomeComponent
}
const statWarsRoute: Route = {
  path: 'star-wars', component: StarWarsComponent
}
const routes: Routes = [
  homeRoute,
  {path: 'home2', component: HomeComponent},
  {
    path: 'il', component: HomeComponent,
    children: [
      statWarsRoute,
    ]

  },
  {
    path: 'uk', component: HomeComponent,
    children: [
      statWarsRoute,
    ]

  },
]


 ```

## AppRouterModule example

```typescript

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule {
}


// no need at version 16+
@NgModule({
  declarations: [
    ...
  ],
  exports: [],
  imports: [AppRouterModule]
})
export class AppModule {
}

```

# how to:

- [ ] create file  `app.routes.ts` if needed.
- [ ] create routes `const routes: Routes = [...]`.
- [ ] add routes to the:
  - [ ] add routes to the `RouterModule.forRoot(routes)`
    or in the `AppRouterModule` or in the `imports: [RouterModule.forRoot()]`
  - [ ] add to app.config `providers: [provideRouter(routes)]`
- [ ] add `<router-outlet></router-outlet>` to the `app.component.html`
- [ ] create list of navigates {link:string,label:string};
- [ ] add list with `*ngFor="let nav of navs"`
- [ ] add to every item `[routerLink]="nav.link"`
- [ ] Bonus: add button `*ngIf="condition"`

