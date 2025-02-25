import { Component, Input } from "@angular/core";
import { ActionForm } from "../../../models/ActionsForm";
import { FormState } from "../../../state/reducers/form.reducer";
import { Store } from "@ngrx/store";
import { changeActionForm } from "../../../state/actions/form.actions";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-form",
  imports: [FormsModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
})
export class FormComponent {
  actionForm: ActionForm = ActionForm.CREATE;
  data: any = {};

  @Input() submit: Function = () => {};
  @Input() update: Function = () => {};
  @Input() delete: Function = () => {};

  constructor(private storeForm: Store<{ FormState: FormState }>) {
    storeForm.subscribe(({ FormState }) => {
      this.actionForm = FormState.actionForm;
      this.data = FormState.data ?? {};
    });
  }

  setActionEdit() {
    this.storeForm.dispatch(changeActionForm({ actionForm: ActionForm.EDIT }));
  }
}
