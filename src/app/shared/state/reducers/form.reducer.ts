import { createReducer, on } from "@ngrx/store";
import { changeActionForm, setDataForm } from "../actions/form.actions";
import { ActionForm } from "../../models/ActionsForm";

export type FormState = {
  actionForm: ActionForm;
  data?: any;
};

const initialState: FormState = {
  actionForm: ActionForm.HIDDEN,
  data: undefined,
};

export const formReducer = createReducer(
  initialState,
  on(changeActionForm, (state, { actionForm }) => ({
    data: state.data,
    actionForm,
  })),
  on(setDataForm, (state, { data }) => ({
    actionForm: state.actionForm,
    data,
  }))
);
