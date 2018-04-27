/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface Recipe {}
interface Ingredient {
  amount: number;
  unit: string;
  name: string;
}
interface Option {
  value: string;
  text: string;
}
