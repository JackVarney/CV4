import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { homeComponent } from '../components/home/home.module';

const appRoutes: Routes = [
    { path: 'home', component: homeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
