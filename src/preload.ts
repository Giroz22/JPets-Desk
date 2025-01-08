import { PetEntity } from "./app/models/pet.entity";

const { contextBridge, ipcRenderer } = require("electron");

const api = {
  getStore: () => ipcRenderer.invoke("get-store"),
  getAllPets: () => ipcRenderer.invoke("getAllPets"),
  getPetbyId: (id: any) => ipcRenderer.invoke("getPetbyId", id),
  createPet: (entity: PetEntity) => ipcRenderer.invoke("createPet", entity),
  updatePet: (id: any, entity: PetEntity) =>
    ipcRenderer.invoke("updatePet", id, entity),
  deletePet: (id: any) => ipcRenderer.invoke("deletePet", id),
};

contextBridge.exposeInMainWorld("electronAPI", api);
