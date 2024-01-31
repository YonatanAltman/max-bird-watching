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
