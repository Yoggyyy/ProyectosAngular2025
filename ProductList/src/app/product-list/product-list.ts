import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  title = 'Mi lista de productos';
  headers = { image: 'Image', desc: 'Producto', price: 'Precio', avail: 'Disponible' };

  products: IProduct[] = [
    {
      id: 1,
      desc: 'SSD hard drive',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: '/meme1.png',
      rating: 5,
    },
    {
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: '/meme2.png',
      rating: 4,
    },
  ];
}
