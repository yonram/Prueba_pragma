import { Injectable } from "@angular/core";
import { ListModel } from "./../models/list.model";

@Injectable()
export class GlobalService {
  public items: Array<ListModel> = undefined;
  
  constructor() {}
}
