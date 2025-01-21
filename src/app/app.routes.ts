import { Routes } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";

export const routes: Routes = [
  { path: "inicio", component: HomeComponent },
  { path: "guarderia", component: HomeComponent },
  { path: "baños", component: HomeComponent },
  { path: "productos", component: HomeComponent },
];
