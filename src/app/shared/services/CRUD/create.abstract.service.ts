import { Observable } from "rxjs";

interface ICreate<RQ, RS> {
  create(entity: RQ): Observable<RS>;
}
