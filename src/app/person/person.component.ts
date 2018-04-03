import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  public name: String;

  ngOnInit() {
    this.pageService.setPage('person');

    // get name
    this.activatedRoute.params.subscribe(params => this.name = params.name);
  }

}
