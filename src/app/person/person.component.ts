import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import people from './people';
import imageProperties from '../image-properties';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  public person: any;
  private images: any[] = imageProperties;
  public personImages: any[] = [];

  ngOnInit() {
    this.pageService.setPage('person');

    // get name
    this.activatedRoute.params.subscribe(params => {
      this.person = people[params.name]
      this.personImages = this.images.filter(image => image.people.indexOf(params.name) >= 0)
    });
  }

}
