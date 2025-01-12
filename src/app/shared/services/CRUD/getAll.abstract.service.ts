import { Observable } from "rxjs";

interface IGetAll<RS> {
  getAll(): Observable<RS[]>;
}
