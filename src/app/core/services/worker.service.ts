import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WorkerHuman } from '../models/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

    getAllUsersUrl : string = 'https://localhost:7257/api/Organization';

    constructor(  private http: HttpClient,) { }

    getAllWorker(): Observable<Array<WorkerHuman>> {
      return this.http.get<any>(this.getAllUsersUrl)
    }

    getWorkerAddintion( workeId: number): Observable<WorkerHuman> {
      return this.http.get<any>(this.getAllUsersUrl+ '/' + workeId)
    }




}
