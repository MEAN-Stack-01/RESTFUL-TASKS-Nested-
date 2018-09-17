import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  editTask : any;

  @Input() taskToShow: any;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {}

  onButtonClickShow(reqTask) : void {
    this.editTask = reqTask;
  }

  onEdit(): void {
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      console.log("Got data from post!", data);
    })
  }

  onDeleteButtonClick(taskId) : void {
    console.log(`Click event is working with num param: ${taskId}`);
    let observable = this._httpService.deleteTask(taskId);
    observable.subscribe(data => {
      console.log("Deleted data from server!", data);
    })
  }

}
