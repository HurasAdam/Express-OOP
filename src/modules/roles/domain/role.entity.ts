export class Role {
  constructor(
    public readonly id: string,
    public name: string,
    public permissions: string[],
    public iconKey: string,
    public labelColor: string,
  ) {}

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }
}
