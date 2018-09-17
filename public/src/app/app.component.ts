import { Component,OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RESTFUL TASKS API';
  tasks = [];
  requestedTask : any;
  newTask : any;

  show = false;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = {title:"Enter title here",description:"Enter description here"}
    // this.editTask = {title:this.newTask.title,description:this.newTask.description}
  }


  onButtonClick(): void {
      console.log(`Click event is working`);
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        this.tasks = data["tasks"];
        console.log("FROM COMPONENT ..... Got our data", this.tasks);

      })
  }

  onButtonClickParam(num: Number): void {
      console.log(`Click event is working with num param: ${num}`);
      let observable = this._httpService.getTaskById(num);
      observable.subscribe (data => {
        this.requestedTask = data['task'];
        console.log("Requested Task!",this.requestedTask);
      })
  }

  onSubmit(): void {
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post!", data);
      this.newTask = {title:"",description:""};
    })
  }
}
