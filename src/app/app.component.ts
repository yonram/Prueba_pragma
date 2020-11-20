import { Component } from '@angular/core';
import { GlobalService } from "./service/global.service";

@Component({
  selector: "hotel",
  template: `
    <registration></registration>
    <schedule [itemsList]="globalService.items"></schedule>
  `,
})
export class AppComponent {
  public constructor(public globalService: GlobalService){}
}

