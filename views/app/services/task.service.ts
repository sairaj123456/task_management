import { Injectable } from '@angular/core';
import {Task} from '../models/task';
//import { TASKS } from './mock-tasks';

import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx'; 
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class TaskService {
private heroesUrl = 'tasks';  // URL to web API
 constructor (private http: Http) {}
 
 /*getTasks():Promise<Task[]> {
  return Promise.resolve(TASKS);
 }*/
 
 

 
	getTaskApi (sprintId): Observable<Task[]> {
	 return this.http.get(this.heroesUrl+'/sprint/'+sprintId).map(this.extractData).catch(this.handleError);
	}
	
	
		getHeroes1 (): Promise<Task[]> {
		return this.http.get(this.heroesUrl)
					.toPromise()
					.then(this.extractData)
					.catch(this.handleError);
		}

		
		
		
		
	addTask (name: string ,_id:string, pri:number,desc:string,type:string,asignId:string,start:string,end:string): Observable<Task> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });     
		return this.http.post('addTask', { name ,_id ,pri,desc,type,asignId,start,end}, options)
					.map(this.extractData)
					.catch(this.handleError);
	}	
		
	updateTask (task:any): Observable<Task> {
			let headers = new Headers({ 'Content-Type': 'application/json' });
			let options = new RequestOptions({ headers: headers });     
			return this.http.post('api/updateTask', {task}, options)
						.map(this.extractData)
						.catch(this.handleError);
		}		
		
	deleteTask(task_id):Observable<Task> {		
		return this.http.delete('task/' + task_id).map(this.extractData).catch(this.handleError);;
	}	

		
	updateTaskPosition (_id: string ,tid: string, pos:number,posOfWorking,posOfStage,posOfProd): Observable<Task> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });     
		return this.http.post('updateTaskPos', {_id ,tid,pos,posOfWorking,posOfStage,posOfProd}, options)
				.map(this.extractData)
			.catch(this.handleError);
	}
	
	
	addTaskComment(_id:string,comment:string): Observable<Task> {
			let headers = new Headers({ 'Content-Type': 'application/json' });
			let options = new RequestOptions({ headers: headers });     
			return this.http.post('api/addComments', {_id,comment}, options)
						.map(this.extractData)
						.catch(this.handleError);
		}	
		
		
		
		
 private extractData(res: Response) {
	 console.log(res);
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
 
 
 

}