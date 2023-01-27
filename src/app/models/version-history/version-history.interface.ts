import { IMeta } from '@models/generic-response-strapi.interface';

export interface IVersionHistoryResponse {
    data: IVersionHistory[];
    meta: IMeta;
}

export interface IVersionHistory {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    primary:     number;
    secundary:   number;
    terciary:    number;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}