import { Vegetais } from '../models/vegetais';
import { vegetaisDao } from './vegetaisDao';

export class VegetaisJsonDao extends vegetaisDao{
   constructor(){
    super('vegetais.json')
    const objs : Vegetais [] = JSON.parse(this._strContent)
    this._vegetais= objs
   }
}