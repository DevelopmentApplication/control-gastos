import { Meta } from '@models/generic-response-strapi.interface';

export interface ResponseVersionHistory {
  data: VersionHistory[];
  meta: Meta;
}

export interface VersionHistory {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  primary: number;
  secundary: number;
  terciary: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
