import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideStore } from "@ngrx/store";
import { petsReducer } from "./features/pets/state/reducers/pets.reducer";
import { provideEffects } from "@ngrx/effects";
import { PetsEffect } from "./features/pets/state/effects/pets.effects";
import { petsRoutes } from "./features/pets/pets.routes";
import { homeRoutes } from "./features/home/home.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([...routes, ...homeRoutes, ...petsRoutes]),
    provideStore({
      petsState: petsReducer,
    }),
    provideEffects(PetsEffect),
  ],
};
