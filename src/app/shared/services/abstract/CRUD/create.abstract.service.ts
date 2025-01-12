interface ICreate<RQ, RS> {
  create(entity: RQ): Promise<RS>;
}
