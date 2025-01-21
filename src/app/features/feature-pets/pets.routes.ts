import { Routes } from "@angular/router";
import { HomePetsComponent } from "./pages/home-pets/home-pets.component";
import { PetManagerComponent } from "./components/pet-manager/pet-manager.component";
import { PetsComponent } from "../../components/pages/pets/pets.component";

export const petsRoutes: Routes = [
  {
    path: "mascotas",
    component: PetsComponent,
    children: [
      {
        path: "manager",
        component: PetManagerComponent,
      },
    ],
  },
];
