interface IGenericService<RQ, RS> {
  getAll(): Promise<RS[]>;
  getById(id: any): Promise<RS>;
  create(entity: RQ): Promise<RS>;
  update(id: any, entity: RQ): Promise<RS>;
  delete(id: any): Promise<RS>;
}
