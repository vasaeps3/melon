import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppRoutergModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutergModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
