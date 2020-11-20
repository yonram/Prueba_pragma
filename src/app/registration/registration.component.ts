import { Component } from "@angular/core";
import { ListModel } from "../models/list.model";
import * as moment from "moment";
import { GlobalService } from "./../service/global.service";

@Component({
  selector: "registration",
  templateUrl: "./registration.component.html",
})
export class RegistrationComponent {
  names: string = "";
  dates: string = "";
  items: Array<ListModel> = new Array();
  error: string = undefined;

  constructor(public globalService: GlobalService) {}

  generateList() {
    this.items = new Array();
    this.globalService.items = undefined;

    const _names = this.names.split("\n");
    const _dates = this.dates.split("\n");

    this.getItemsList(_names, _dates);
  }

  getItemsList(_names, _dates) {
    let dates: Array<string> = undefined;
    for (let i = 0; i < _names.length; i++) {
      if (_dates[i].indexOf(" to ") >= -1) {
        dates = _dates[i].split(" to ");

        if (moment(dates[0]) <= moment(dates[1])) {
          let _dates: Array<string> = this._daysRange(
            moment(dates[0]),
            moment(dates[1])
          );

          for (let j = 0; j < _dates.length; j++) {
            let list: ListModel = new ListModel();
            list.name = _names[i];
            list.date = _dates[j];
            this.items.push(list);
          }

          this.items = this._orderByDate(this.items);
          this.globalService.items = this.items;
        } else {
          alert("The start date must be less than the end date");
        }
      } else {
        alert("Wrong date format. Example: YYYY-MM-DD to YYYY-MM-DD");
      }
    }
  }

  private _orderByDate(items: Array<ListModel>): Array<ListModel> {
    return items.sort((a: ListModel, b: ListModel) => {
      return moment.utc(a.date).diff(moment.utc(b.date));
    });
  }

  private _daysRange(from: moment.Moment, to: moment.Moment): Array<string> {
    let dates: Array<string> = new Array<string>();
    while (from.isSameOrBefore(to)) {
      dates.push(from.format("YYYY-MM-DD"));
      from.add(1, "days");
    }
    return dates;
  }
}
