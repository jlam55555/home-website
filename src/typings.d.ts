/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface Recipe {
  name: string;
  description: string;
  images: string[];
  refUrl: string;
  ingredients: Ingredient[];
  instructions: string[];
}
interface Ingredient {
  amount: number;
  unit: string;
  name: string;
}
interface Option {
  value: string;
  text: string;
}
