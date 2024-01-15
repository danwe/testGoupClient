import { Component } from '@angular/core';
import { WorkerHuman } from 'src/app/core/models/worker';
import { WorkerService } from 'src/app/core/services/worker.service';

@Component({
  selector: 'app-side-left',
  templateUrl: './side-left.component.html',
  styleUrls: ['./side-left.component.scss']
})
export class SideLeftComponent {
  constructor(private workerService: WorkerService, ) {}
  workerList : Array<WorkerHuman>= [];

  ngOnInit(): void {
    this.workerService.getAllWorker().subscribe(data => {
     // alert(555555)
      this.workerList = data;
    })
  };

  selectedWorker() {
    // this.idv = event.id;
    // this.eventEmitter.();
  }



}
