import { Observable } from "rxjs";

interface IUpdate<RQ, RS, ID> {
  update(id: ID, entity: RQ): Observable<RS>;
}
