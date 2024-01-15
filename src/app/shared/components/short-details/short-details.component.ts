import { Component, Input } from '@angular/core';
import { DepartmentType, Gender, WorkerHuman, WorkerTypeId } from 'src/app/core/models/worker';
import { AppComponent, } from 'src/app/app.component';
@Component({
  selector: 'app-short-details',
  templateUrl: './short-details.component.html',
  styleUrls: ['./short-details.component.scss']
})
export class ShortDetailsComponent {
  GenderList = ["Male", "Female",];
  @Input() workerHuman: WorkerHuman = {
    id: 0,
    name: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    gender: Gender.Male,
    departmentType:DepartmentType.IT,
    workerTypeId: WorkerTypeId.FullTime
  };
}
