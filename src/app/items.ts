import { Card } from './models/card.model';

// const prefix = 'catalogo/';
const prefix = '';

export const ITEMS: Card[] = [
  {
    name: 'Rueda',
    img: prefix + 'rueda.jpg',
    list: ['Rueda de madera', '200 lukas'],
    category: ['Laser','Cartas'],
    price: 28000
  },
  {
    name: 'Rueda',
    img: prefix + 'rueda.jpg',
    list: ['Rueda de madera', '200 lukas'],
    category: 'Laser',
  },
];
