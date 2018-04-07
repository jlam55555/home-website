import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import people from './people';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  public person: any;

  ngOnInit() {
    this.pageService.setPage('person');

    // get name
    this.activatedRoute.params.subscribe(params => this.person = people[params.name]);
  }

}
