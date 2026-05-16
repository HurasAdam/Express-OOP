export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public createdBy: string,
    public createdAt: Date,
    public labelColor: string,
  ) {}
}
