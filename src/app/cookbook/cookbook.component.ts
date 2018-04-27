import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {

  constructor(
    private pageService: PageService,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute
  ) {}

  // recipe path
  public recipePath: string = undefined;

  // recipe
  public recipe: Recipe = null;

  // create mode
  public isCreateMode: boolean = false;

  // create form fields
  public createName: string = '';
  public createDescription: string = '';
  public createRefUrl: string = '';
  public createIngredients: Ingredient[] = [
    { amount: 5, unit: null, name: 'eggs' },
    { amount: 2, unit: null, name: 'slices whole wheat bread' }
  ];

  // create options for units
  public options: Option[] = [
    { value: null, text: '(count)' },
    { value: 'oz', text: 'oz.' },
    { value: 'lb', text: 'lb.' }
  ];

  ngOnInit() {
    this.pageService.setPage('cookbook');

    // keep recipe updated
    this.activatedRoute.params.subscribe(params => {
      this.recipePath = params.recipe;
      this.serverService.getRecipe({ path: params.recipe }, res => this.recipe = res );
    });

    // keep create mode updated
    this.activatedRoute.data.subscribe(data => this.isCreateMode = data.create !== true ? false : true);
  }

}
