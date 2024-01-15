export class WorkerHuman {
  public id: number = 0;
  public name: string = '';
  public lastName: string = '';
  public phoneNumber: string = '';
  public address: string = '';
  public gender: Gender = 0;
  public departmentType: DepartmentType = 0;
  public workerTypeId: WorkerTypeId = 0;
}

export enum Gender {
  Male = 0,
  Female = 1
}

export enum DepartmentType {
  IT = 0,
  HR = 1,
  Finance = 2
}

export enum WorkerTypeId {
  FullTime = 0,
  PartTime = 1,
}

