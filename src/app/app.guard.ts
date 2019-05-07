import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, } from "@angular/router";
import { CanActivate } from "@angular/router";
import { Store } from "@ngxs/store";
import { LocalStorageService } from "./services/local-storage.service";
import { TranslateService } from './services/translate.service';
import { SetUser } from './store/app-start/app-start.actions';

@Injectable({
  providedIn: "root"
})
export class AppGuard implements CanActivate {
  coursename: string;
  username: string;
  constructor(private localStorageService: LocalStorageService, private router: Router, private translate: TranslateService, private store: Store) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (route.queryParamMap.get("assignmentGuid")) {
      //when we go to production change this to paramMap
      this.translate.use("en");
      this.localStorageService.setItem("assignmentGuid", route.queryParamMap.get("assignmentGuid"));
      this.localStorageService.setItem("memberId", route.queryParamMap.get("userId"));

      this.router.navigateByUrl("");
    }
    // this.store.dispatch(new SetUser(this.localStorageService.getItem("memberId")));
    return true;
  }
}
