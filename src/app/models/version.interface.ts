export interface Attributes {
  primary: number;
  secondary: number;
  terciary: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Version {
  id: number;
  attributes: Attributes;
}
