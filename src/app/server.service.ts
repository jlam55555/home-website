import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as io from 'socket.io-client';

// this class simply serves to handle requests to and from the server
@Injectable()
export class ServerService {

  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io();
  }

  // get all recipes
  private recipesSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  public getRecipes(): BehaviorSubject<Recipe[]> {
    this.socket.emit('getRecipes', res => this.recipesSubject.next(res));
    return this.recipesSubject;
  }

  // create recipe
  public createRecipe(data: any, callback: Function): void {
    this.socket.emit('createRecipe', data, callback);
  }

}
