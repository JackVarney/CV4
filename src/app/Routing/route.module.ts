import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { infoComponent } from '../components/info/info.module';
import { homeComponent } from '../components/home/home.module';
import { cvComponent } from '../components/cv/cv.module';
import { aboutComponent } from '../components/about/about.module'

const appRoutes: Routes = [
    { path: 'home', component: homeComponent },
    { path: 'info', component: infoComponent },
    { path: 'cv',   component: cvComponent },
    { path: 'about',component: aboutComponent},
    { path: '',     redirectTo: '/home',    pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
