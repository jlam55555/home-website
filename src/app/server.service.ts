import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

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

}
