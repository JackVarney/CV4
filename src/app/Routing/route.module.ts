import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from '../components/home/home.module';

const appRoutes: Routes = [
    {path: 'Home', component: HomeModule}
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true}
        )
    ]
})

export class RouteModule { }
