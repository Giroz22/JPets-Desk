import { Observable } from "rxjs";

interface IGetById<RS, ID> {
  getById(id: ID): Observable<RS>;
}
