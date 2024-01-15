import { WorkerService } from './../../../../../../core/services/worker.service';
import { Component, ViewChild , Input, SimpleChanges } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Item } from 'src/app/core/models/const/item';
import { WorkerHuman } from 'src/app/core/models/worker';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {


  constructor(private workerService: WorkerService, ) {}
  workerList : Array<WorkerHuman>= [];

  ngOnInit(): void {
    this.workerService.getAllWorker().subscribe(data => {
      this.workerList = data;
    })
  };






}
