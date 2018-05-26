import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './core/home/home.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'form', component: FormComponent },
    { path: 'data', component: DataDisplayComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
