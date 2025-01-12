interface IGetById<RS, ID> {
  getById(id: ID): Promise<RS>;
}
