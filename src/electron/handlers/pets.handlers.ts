import { ipcMain } from "electron";
import { PetsService } from "../services/pet.service";

const service: PetsService = new PetsService();

ipcMain.handle("getAllPets", async () => service.getAllPets());

ipcMain.handle("getPetbyId", async (event, petId) => service.getPetbyId(petId));

ipcMain.handle("createPet", async (event, petRQ) => service.createPet(petRQ));

ipcMain.handle("updatePet", async (event, petId, petRQ) =>
  service.updatePet(petId, petRQ)
);

ipcMain.handle("deletePet", async (event, petId) => service.deletePet(petId));
