import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppResolver } from "./app.resolver";
import { PreferencesShellComponent } from "./components/preferences/preferences-shell/preferences-shell.component";
import { PreferencesGeneralComponent } from "./components/preferences/preferences-general/preferences-general.component";

const routes: Routes = [
  {
    path: "start",
    component: PreferencesShellComponent,
    resolve: { AppResolver }
  },
  { path: "", component: PreferencesShellComponent },
  { path: "general", component: PreferencesGeneralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
