import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideStore } from "@ngrx/store";
import { petsReducer } from "./features/feature-pets/state/reducers/pets.reducer";
import { provideEffects } from "@ngrx/effects";
import { PetsEffect } from "./features/feature-pets/state/effects/pets.effects";
import { petsRoutes } from "./features/feature-pets/pets.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([...routes, ...petsRoutes]),
    provideStore({
      petsState: petsReducer,
    }),
    provideEffects(PetsEffect),
  ],
};
