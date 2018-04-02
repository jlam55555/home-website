import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // title (get from title service)
  public title: String;

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.getPage().subscribe(page => this.page = page);
  }

}
