import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { AppStartStateSelectors } from 'src/app/store/app-start/app-start.selectors';
import { GetAssignmentInitialData } from 'src/app/store/app-start/app-start.actions';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: "app-app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"]
})
export class AppHeaderComponent implements OnInit {
  constructor(private store: Store, private memberService: MemberService) { }
  @Select(AppStartStateSelectors.getCourseName) courseName$: Observable<string>;
  @Select(AppStartStateSelectors.getUsername) username$: Observable<string>;
  ngOnInit() {
    this.store.dispatch(new GetAssignmentInitialData());

  }



}
