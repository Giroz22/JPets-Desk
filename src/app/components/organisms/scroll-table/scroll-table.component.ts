import { Component, Input } from "@angular/core";
import { RowDataComponent } from "../../molecules/row-data/row-data.component";
import { RowDataPetComponent } from "../../molecules/row-data-pet/row-data-pet.component";

export enum TypeDataScrollTable {
  PETS = "pets",
}

@Component({
  selector: "app-scroll-table",
  imports: [RowDataPetComponent, RowDataComponent],
  templateUrl: "./scroll-table.component.html",
  styleUrl: "./scroll-table.component.scss",
})
export class ScrollTableComponent {
  @Input() data!: any[];
  @Input() typeData!: TypeDataScrollTable;
}
