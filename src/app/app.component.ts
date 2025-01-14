import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { NavComponent } from "./shared/components/nav/nav.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
