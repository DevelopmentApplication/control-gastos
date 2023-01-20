export interface Attributes {
  primaria: number;
  secundaria: number;
  terciaria: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Version {
  id: number;
  attributes: Attributes;
}
