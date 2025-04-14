import { Injectable } from "@angular/core";
import { PetsResponse } from "../state/models/pet.response";
import { PetRequest } from "../state/models/pet.request";
import { from, Observable } from "rxjs";
import { PetResponse } from "../../../../../electron/ipc/dtos/pet.response";
import { Pagination } from "../../../shared/models/pagination";

@Injectable({
  providedIn: "root",
})
export class PetsService {
  public getAll(): Observable<PetsResponse[]> {
    return from(
      (window as any).electronAPI.getAllPets() as Promise<PetResponse[]>
    );
  }
  public getAllPetsPagination(
    numPage: number,
    size: number
  ): Observable<Pagination> {
    return from(
      (window as any).electronAPI.getAllPetsPagination(
        numPage,
        size
      ) as Promise<Pagination>
    );
  }

  getById(id: number): Observable<PetsResponse> {
    return from(
      (window as any).electronAPI.getPetbyId(id) as Promise<PetResponse>
    );
  }
  create(entity: PetRequest): Observable<PetsResponse> {
    return from(
      (window as any).electronAPI.createPet(entity) as Promise<PetResponse>
    );
  }
  update(id: number, entity: PetRequest): Observable<PetsResponse> {
    return from(
      (window as any).electronAPI.updatePet(id, entity) as Promise<PetsResponse>
    );
  }
  delete(id: any): Observable<PetsResponse> {
    return from(
      (window as any).electronAPI.deletePet(id) as Promise<PetResponse>
    );
  }
}
