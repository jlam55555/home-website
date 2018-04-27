import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

// this class simply serves to handle requests to and from the server
@Injectable()
export class ServerService {

  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io();
  }

  // get recipe by name
  public getRecipe(data: any, callback: Function): void {
    this.socket.emit('getRecipe', data, callback);
  }

  // create recipe
  public createRecipe(data: any, callback: Function): void {
    this.socket.emit('createRecipe', data, callback);
  }

}
