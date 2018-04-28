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

  // all recipes and selected one
  public recipes: Recipes[] = [];
  public recipe: Recipe = null;

  // create mode
  public isCreateMode: boolean = false;

  // create form fields
  public createName: string = '';
  public createDescription: string = '';
  public createRefUrl: string = '';
  public createIngredients: Ingredient[] = [];
  public createInstructions: { value: string }[] = [];

  // for creating new instructions / ingredients
  public createNewIngredient: Ingredient = { amount: 1, unit: null, name: '' };
  public createNewInstruction: string = '';

  // create options for units
  public options: Option[] = [
    { value: null, text: '(count)' },
    // units of volume
    { value: 'teaspoon', text: 'tsp.' },
    { value: 'fluidOunce', text: 'fl oz.' },
    { value: 'cup', text: 'cup' },
    { value: 'pint', text: 'pt.' },
    { value: 'gallon', text: 'gal.' },
    { value: 'milliliter', text: 'mL' },
    { value: 'liter', text: 'L' },
    // mass and weight
    { value: 'pound', text: 'lb.' },
    { value: 'ounce', text: 'oz.' },
    { value: 'milligram', text: 'mg' },
    { value: 'gram', text: 'g' },
    { value: 'kilogram', text: 'kg' },
    // length
    { value: 'millimeter', text: 'mm' },
    { value: 'centimeter', text: 'cm' },
    { value: 'meter', text: 'm' },
    { value: 'inch', text: 'inch.' },
    // other (will be hidden in recipe)
    { value: 'other', text: '(other)' },
  ];

  // errors
  public errors: any = {};

  // add ingredient
  public addIngredient(): void {
    this.errors = {};
    this.createNewIngredient.name = this.createNewIngredient.name.trim();
    if(this.createNewIngredient.name.length === 0) {
      this.errors.ingredients = 'The name of the ingredient cannot be empty.';
    } else if(this.createNewIngredient.amount <= 0) {
      this.errors.ingredients = 'You must have a positive amount of the ingredient.';
    } else {
      this.createIngredients.push(this.createNewIngredient);
      this.createNewIngredient = { amount: 1, unit: null, name: '' };
    }
  }

  // remove ingredient
  public removeIngredient(index: number): void {
    this.createIngredients.splice(index, 1);
  }

  // add instruction
  public addInstruction(): void {
    this.errors = {};
    this.createNewInstruction = this.createNewInstruction.trim();
    if(this.createNewInstruction.length === 0) {
      this.errors.instructions = 'The instruction cannot be empty.';
    } else {
      this.createInstructions.push({ value: this.createNewInstruction });
      this.createNewInstruction = '';
    }
  }

  // remove instruction
  public removeInstruction(index: number): void {
    this.createInstructions.splice(index, 1);
  }

  // create recipe
  public createRecipe() {
    let data = {
      name: this.createName,
      description: this.createDescription,
      refUrl: this.createRefUrl,
      ingredients: this.createIngredients,
      instructions: this.createInstructions.map(instruction => instruction.value)
      // add images too soon
    };
    this.serverService.createRecipe(data, res => {
      if(res !== true) {
        this.errors = res;
      } else {
        this.errors = {};
        console.log('created! yay!');
      }
    });
  }

  ngOnInit() {
    this.pageService.setPage('cookbook');

    // keep recipe updated
    this.activatedRoute.params.subscribe(params => {
      this.recipePath = params.recipe;
      this.recipe = this.recipes.find(recipe => recipe.path === this.recipePath) || null;
    });

    // keep list of recipes updated
    this.serverService.getRecipes().subscribe(newRecipes => {
      this.recipes = newRecipes;
      this.recipe = this.recipes.find(recipe => recipe.path === this.recipePath) || null;
    });

    // keep create mode updated
    this.activatedRoute.data.subscribe(data => this.isCreateMode = data.create !== true ? false : true);
  }

}
