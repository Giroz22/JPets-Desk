import { Routes } from "@angular/router";
import { ManagerPetsComponent } from "./pages/manager/manager.component";
import { HomePetsComponent } from "./pages/home-pets/home-pets.component";

export const petsRoutes: Routes = [
  {
    path: "mascotas",
    component: HomePetsComponent,
  },
  {
    path: "manager",
    component: ManagerPetsComponent,
  },
];
