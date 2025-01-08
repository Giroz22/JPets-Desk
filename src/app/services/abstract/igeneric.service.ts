interface IGenericService<E> {
  getAll(): Promise<E[]>;
  getById(id: any): Promise<E>;
  create(entity: E): Promise<E>;
  update(id: any, entity: E): Promise<E>;
  delete(id: any): Promise<void>;
}
