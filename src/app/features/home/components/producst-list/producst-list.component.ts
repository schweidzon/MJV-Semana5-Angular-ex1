import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-producst-list',
  templateUrl: './producst-list.component.html',
  styleUrls: ['./producst-list.component.scss']
})
export class ProducstListComponent implements OnInit {


  products: Array<Product> = [
    {
      id: 1,
      description: 'Playstation 3',
      price: 1000
    },
    {
      id: 2,
      description: 'Playstation 4',
      price: 2000
     },
     {
      id: 3,
      description: 'Playstation 5',
      price: 3900
     },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
