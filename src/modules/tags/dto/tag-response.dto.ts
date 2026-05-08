export interface TagResponseDto {
  id: string;
  name: string;

  createdBy: {
    id: string;
    name: string;
    surname: string;
    email: string;
  } | null;

  createdAt?: Date;

  updatedAt?: Date;
}
