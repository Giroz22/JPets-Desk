import { ipcMain } from "electron";
import { PetsService } from "../services/pet.service";

const service: PetsService = new PetsService();

ipcMain.handle("getAllPets", () => service.getAllPets());

ipcMain.handle("getPetbyId", (event, petId) => service.getPetbyId(petId));

ipcMain.handle("createPet", (event, petRQ) => service.createPet(petRQ));

ipcMain.handle("updatePet", (event, petId, petRQ) =>
  service.updatePet(petId, petRQ)
);

ipcMain.handle("deletePet", (event, petId) => service.deletePet(petId));
