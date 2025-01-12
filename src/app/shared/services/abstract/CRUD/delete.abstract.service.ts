interface IDelete<RS, ID> {
  delete(id: ID): Promise<RS>;
}
