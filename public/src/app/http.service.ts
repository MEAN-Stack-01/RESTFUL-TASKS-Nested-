import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getTaskById('5b9ad902cca9bbb26e726f59');
  }

  getTasks(){
      // our http response is an Observable, store it in a variable
      return this._http.get('/tasks');
      // subscribe to the Observable and provide the code we would like to do with our data from the response
      // tempObservable.subscribe(data => console.log("Got our tasks!", data));
   }

   getTaskById(id){

   // our http response is an Observable, store it in a variable
      return this._http.get('/tasks/'+id);
   // subscribe to the Observable and provide the code we would like to do with our data from the response
      // tempObservable.subscribe(data => console.log("The requested task is!", data));
  }

  addTask(newTask){
    console.log("Successfull subitted data to server");
    return this._http.post('/tasks/new',newTask);
  }

  editTask(editTask){
    console.log("Successfull submitted edit  data to server");
    return this._http.put('/tasks/'+editTask._id, editTask);
  }

  deleteTask(id){
    console.log("Successfull submitted deleted data to server",'/tasks/remove/'+ id);
    return this._http.delete('/tasks/remove/'+ id);
  }

}
