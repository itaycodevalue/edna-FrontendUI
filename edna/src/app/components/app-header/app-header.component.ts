import { Component, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { AppState } from "../../state/app.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"]
})
export class AppHeaderComponent implements OnInit {
  @Select(AppState.getCourseName) courseName$: Observable<any>;
  constructor() {}

  ngOnInit() {}
}
