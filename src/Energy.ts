export type EnergyType = 'mana' | 'staminia';

export default interface Energy {
  type_ : EnergyType;
  amount : number;
}