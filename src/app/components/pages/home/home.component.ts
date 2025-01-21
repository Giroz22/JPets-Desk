import { Component } from "@angular/core";
import { ScrollTableComponent } from "../../organisms/scroll-table/scroll-table.component";

@Component({
  selector: "app-home",
  imports: [ScrollTableComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
