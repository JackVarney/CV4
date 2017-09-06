import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { infoComponent } from '../components/info/info.module';
import { homeComponent } from '../components/home/home.module';
import { cvComponent } from '../components/cv/cv.module';

const appRoutes: Routes = [
    { path: 'home', component: homeComponent },
    { path: 'info', component: infoComponent },
    { path: 'cv',   component: cvComponent }
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
