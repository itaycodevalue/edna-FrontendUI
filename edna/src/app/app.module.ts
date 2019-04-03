import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";

import { AppResolver } from "./app.resolver";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsModule } from "@ngxs/store";
import { AppState } from "./state/app.state";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material";
import { ClassroomShellComponent } from "./components/classroom-shell/classroom-shell.component";
import { DashboardShellComponent } from "./components/dashboard-shell/dashboard-shell.component";
import { PreferencesShellComponent } from "./components/preferences/preferences-shell/preferences-shell.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { AccordionModule } from "primeng/accordion";
import { PreferencesGeneralComponent } from "./components/preferences/preferences-general/preferences-general.component";
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ClassroomShellComponent,
    DashboardShellComponent,
    PreferencesShellComponent,
    PreferencesGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    NgxsModule.forRoot([AppState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [AppResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
