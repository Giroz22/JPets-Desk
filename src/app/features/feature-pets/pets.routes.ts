import { Routes } from "@angular/router";
import { HomePetsComponent } from "./pages/home-pets/home-pets.component";
import { PetManagerComponent } from "./components/pet-manager/pet-manager.component";

export const petsRoutes: Routes = [
  {
    path: "mascotas",
    component: HomePetsComponent,
    children: [
      {
        path: "manager",
        component: PetManagerComponent,
      },
    ],
  },
];
