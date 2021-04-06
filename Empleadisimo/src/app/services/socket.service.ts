import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket:any;
  private url = '';

  constructor() {
    this.socket = io(this.url);
   }
  
   listen(eventName: string){
    return new Observable((Subscriber)  => {
      this.socket.on(eventName,( data:any ) => {
        Subscriber.next(data);
      })
    })
  }
  

  emit(eventName:string,data:any){
    this.socket.emit(eventName,data);
  }

}