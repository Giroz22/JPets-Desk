import { Repository } from "typeorm";
import { PetEntity } from "../../models/pet.entity";
import { getRepository } from "../config/DataSourceConnection";
import { ipcMain } from "electron";
import { errorAlert } from "../utils/alerts";

const repository: Repository<PetEntity> = getRepository(PetEntity);

ipcMain.handle("getAllPets", async () => {
  return await repository.find();
});

ipcMain.handle("getPetbyId", async (event, petId) => {
  return await repository.findOne({ where: { id: petId } });
});

ipcMain.handle("createPet", async (event, petRQ) => {
  try {
    const pet: PetEntity = petRQ as PetEntity;

    const newPet: PetEntity = await repository.save(pet);

    return newPet;
  } catch (error) {
    errorAlert("Error al crear la mascota: " + error);
    return;
  }
});

ipcMain.handle("updatePet", async (event, petId, petRQ) => {
  try {
    await find(petId);

    const pet: PetEntity = petRQ as PetEntity;

    await repository.update({ id: petId }, { ...pet });

    return repository.findOne({ where: { id: petId } });
  } catch (error) {
    errorAlert("Error al actualizar la mascota: " + error);
    return;
  }
});

ipcMain.handle("deletePet", async (event, petId) => {
  const pet: PetEntity | null = await find(petId);
  repository.softRemove({ ...pet });
});

async function find(petId: any): Promise<PetEntity | null> {
  let pet: PetEntity | null = new PetEntity();

  await repository
    .findOne({
      where: { id: petId },
    })
    .then((petFound) => {
      if (petFound == null) {
        errorAlert("No se encontro mascota con el id: " + petId);
      }

      pet = petFound;
    })
    .catch((error) => errorAlert("Error buscando Pet" + error));

  return pet;
}
