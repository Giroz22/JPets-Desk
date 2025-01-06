import { Component, OnInit } from "@angular/core";
import { StoreService } from "../../services/store.service";

@Component({
  selector: "home-page",
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  nameStore: string = "";

  constructor(private service: StoreService) {}

  async ngOnInit() {
    this.service.getStore().then((data) => {
      this.nameStore = data.name;
    });
  }
}
