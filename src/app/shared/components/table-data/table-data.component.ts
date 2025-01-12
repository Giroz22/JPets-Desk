import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "table-data",
  imports: [],
  templateUrl: "./table-data.component.html",
  styleUrl: "./table-data.component.scss",
})
export class TableDataComponent implements OnInit {
  @Input() nameClass: string = "";
  @Input() data!: any[];
  @Input() eventEdit!: (id: any) => void;
  listAttributes: string[] = [];
  listObjects: any[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.data.length) {
      this.listAttributes = Object.keys(this.data[0]);
      this.listObjects = this.data;
    }
  }

  // delete(id: any) {
  //   Swal.fire({
  //     title: `Estas seguro de eliminar la ${this.nameClass} con id: ${id}?`,
  //     text: "No podras revertir los cambios",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Si, estoy seguro!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.service.delete(id).then((entity) => {
  //         Swal.fire({
  //           title: `La ${this.nameClass} fue eliminada correctamente!!`,
  //           icon: "success",
  //         });
  //       });
  //     }
  //   });
  // }
}
