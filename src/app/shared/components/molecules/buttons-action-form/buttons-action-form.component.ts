import { Component, Input } from "@angular/core";
import { ActionForm } from "../../../models/ActionsForm";
import { Store } from "@ngrx/store";
import { FormState } from "../../../state/reducers/form.reducer";
import { changeActionForm } from "../../../state/actions/form.actions";

@Component({
  selector: "app-buttons-action-form",
  imports: [],
  templateUrl: "./buttons-action-form.component.html",
  styleUrl: "./buttons-action-form.component.scss",
})
export class ButtonsActionFormComponent {
  actionForm: ActionForm = ActionForm.CREATE;

  @Input() submit: Function = () => {};
  @Input() update: Function = () => {};
  @Input() delete: Function = () => {};

  constructor(private storeForm: Store<{ FormState: FormState }>) {
    storeForm.subscribe(({ FormState }) => {
      this.actionForm = FormState.actionForm;
    });
  }
  setActionEdit() {
    this.storeForm.dispatch(changeActionForm({ actionForm: ActionForm.EDIT }));
  }
}
