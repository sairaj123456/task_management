import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskComponent }   from './task.component';
import { FormsModule }   from '@angular/forms';
import { TaskDetailComponent } from './task-detail.component';
import { AppComponent }        from './app.component';
import { RouterModule }   from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HttpModule }    from '@angular/http';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import {ProjectComponent }   from './component/project.component';
import {ProjectDetailComponent }   from './component/project-detail.component';
import {LocationStrategy, HashLocationStrategy}  from '@angular/common';
import { TaskDetailComponent1 } from './component/task-detail.component';
import { TaskComponent1 } from './component/task.component';
@NgModule({
imports:[
	BrowserModule, 
	FormsModule,
	HttpModule,
    DragulaModule,
	RouterModule.forRoot([
	   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
		{
			path: 'tasks',
			component: TaskComponent
		},
		{ 
			path: 'dashboard', 
			component: DashboardComponent 
		},
		{ 
			path: 'project', 
			component: ProjectComponent 
		},
		{ 
			path: 'detail/:id', 
			component: ProjectDetailComponent 
		},

	])
  
  ],
  declarations: [AppComponent,TaskComponent ,TaskComponent1, TaskDetailComponent,TaskDetailComponent1 , DashboardComponent,ProjectComponent,ProjectDetailComponent],
  bootstrap:    [ AppComponent ], 
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule { }