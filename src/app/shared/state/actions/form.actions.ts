import { createAction, props } from "@ngrx/store";
import { ActionForm } from "../../models/ActionsForm";

export const changeActionForm = createAction(
  "[form component] changeActionForm",
  props<{ actionForm: ActionForm }>()
);

export const setDataForm = createAction(
  "[form component] setDataForm",
  props<{ data: any }>()
);
