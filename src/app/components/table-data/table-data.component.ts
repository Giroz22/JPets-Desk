import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "table-data",
  imports: [],
  templateUrl: "./table-data.component.html",
  styleUrl: "./table-data.component.scss",
})
export class TableDataComponent implements OnInit {
  data: any[] = [];
  @Input() service!: IGenericService<any>;
  listAttributes: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.service.getAll().then((data) => {
      this.data = data;
      this.listAttributes = this.data.length ? Object.keys(this.data[0]) : [];
    });
  }

  editar(id: any) {
    alert("Editando" + id);
  }

  eliminar(id: any) {
    alert("Eliminando" + id);
    this.service.delete(id).then(() => {});
    this.service.getAll().then((data) => (this.data = data));
  }
}
