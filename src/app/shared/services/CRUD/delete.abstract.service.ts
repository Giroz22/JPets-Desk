import { Observable } from "rxjs";

interface IDelete<RS, ID> {
  delete(id: ID): Observable<RS>;
}
