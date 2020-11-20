import { Component, Input } from "@angular/core";
import { ListModel } from "../models/list.model";

@Component({
  selector: "schedule",
  templateUrl: "./schedule.component.html",
})
export class ScheduleComponent {
  @Input() itemsList: Array<ListModel> = [];
  constructor() {}
}
