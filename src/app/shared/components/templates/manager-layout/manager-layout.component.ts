import { Component, Input } from "@angular/core";
import {
  ScrollTableComponent,
  TypeDataScrollTable,
} from "../../organisms/scroll-table/scroll-table.component";
import { SearchComponent } from "../../molecules/search/search.component";
import { CircleButtonComponent } from "../../atoms/circle-button/circle-button.component";
import { Store } from "@ngrx/store";
import { FormState } from "../../../state/reducers/form.reducer";
import { changeActionForm } from "../../../state/actions/form.actions";
import { ActionForm } from "../../../models/ActionsForm";

@Component({
  selector: "app-manager-layout",
  imports: [ScrollTableComponent, SearchComponent, CircleButtonComponent],
  templateUrl: "./manager-layout.component.html",
  styleUrl: "./manager-layout.component.scss",
})
export class ManagerLayoutComponent {
  @Input() data: any[] = [];
  @Input() typeData!: TypeDataScrollTable;

  actionForm: ActionForm = ActionForm.CREATE;
  Actionform = ActionForm;

  constructor(private storeForm: Store<{ FormState: FormState }>) {
    storeForm.subscribe(({ FormState }) => {
      this.actionForm = FormState.actionForm;
    });
  }

  changeActionForm(actionForm: ActionForm) {
    this.storeForm.dispatch(changeActionForm({ actionForm }));
  }
}
