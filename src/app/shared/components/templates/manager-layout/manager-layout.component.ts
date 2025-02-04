import { Component, Input } from "@angular/core";
import {
  ScrollTableComponent,
  TypeDataScrollTable,
} from "../../organisms/scroll-table/scroll-table.component";

@Component({
  selector: "app-manager-layout",
  imports: [ScrollTableComponent],
  templateUrl: "./manager-layout.component.html",
  styleUrl: "./manager-layout.component.scss",
})
export class ManagerLayoutComponent {
  @Input() data: any[] = [];
  @Input() typeData!: TypeDataScrollTable;
}
