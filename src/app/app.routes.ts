import { Routes } from "@angular/router";
import { HomePageComponent } from "./features/home/pages/home-page/home-page.component";

export const routes: Routes = [
  { path: "inicio", component: HomePageComponent },
  { path: "guarderia", component: HomePageComponent },
  { path: "baños", component: HomePageComponent },
  { path: "productos", component: HomePageComponent },
];
