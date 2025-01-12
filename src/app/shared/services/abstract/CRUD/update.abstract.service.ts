interface IUpdate<RQ, RS, ID> {
  update(id: ID, entity: RQ): Promise<RS>;
}
