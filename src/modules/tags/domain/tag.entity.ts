/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

export class Tag {
  constructor(
    public readonly id: string,
    public name: string,
    public readonly createdBy: string,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
  ) {}
}
