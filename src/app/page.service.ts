import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PageService {

  constructor() { }

  private page: String;
  private pageObservable: BehaviorSubject<String> = new BehaviorSubject<String>(null);

  public getPage() {
    return this.pageObservable;
  }

  public setPage(page: String) {
    this.pageObservable.next(page);
    this.page = page;
  }

}
