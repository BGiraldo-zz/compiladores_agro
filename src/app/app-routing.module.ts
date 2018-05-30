import { AdministrationComponent } from './administration/administration.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './general/login/login.component';

//path: 'login',
//component: LoginComponent,
//canActivate:[AuthGuard]


const appRoutes: Routes = [
	
	
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'administration',
		component: AdministrationComponent
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: LoginComponent
	},
	
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule {
}