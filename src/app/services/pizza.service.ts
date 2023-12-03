import { Injectable } from '@angular/core';
import { Pizzas } from '../shared/models/pizza';
import { Tags } from '../shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getAllPizzasByTags(tag: string): Pizzas[]{
    if(tag =='All')
    return this.getAll();
    else
    return this.getAll().filter(pizza=> pizza.tags?.includes(tag));
  }

  getAllTags(): Tags[] {
    return [
      {
        name: "Italian",
        count: 8
      },
      {
        name: "Mexican",
        count: 5
      },
      {
        name: "French",
        count: 1
      },
      {
        name: "German",
        count: 8
      },
      {
        name: "Spanish",
        count: 8
      },
      {
        name: "American",
        count: 8
      },
      {
        name: "Indian",
        count: 8
      }
    ]
  }

  getAll(): Pizzas[] {
    return [
      {
        id: 1,
        price: 5,
        name: "Chicken Pepperoni",
        favorite: false,
        rating: 4,
        imageUrl: '/assets/pizza-1.jpg',
        tags: ['Italian', 'Mexican']
      },
      {
        id: 2,
        price: 5.5,
        name: "Chicken Supreme",
        favorite: false,
        rating: 4.3,
        imageUrl: '/assets/pizza-2.jpg',
        tags: ['Italian', 'French']
      },
      {
        id: 3,
        price: 5.8,
        name: "Chicken Fiesta",
        favorite: false,
        rating: 4.7,
        imageUrl: '/assets/pizza-3.jpg',
        tags: ['Italian', 'German']
      },
      {
        id: 4,
        price: 7.5,
        name: "Chicken Five-In-One",
        favorite: false,
        rating: 4.8,
        imageUrl: '/assets/pizza-4.jpg',
        tags: ['Italian', 'Mexican','Spanish']
      },
      {
        id: 5,
        price: 6.5,
        name: "Veg Pepperoni",
        favorite: false,
        rating: 4.3,
        imageUrl: '/assets/pizza-5.jpg',
        tags: ['Italian', 'Mexican']
      },
      {
        id: 6,
        price: 4.75,
        name: "Veg Supreme",
        favorite: false,
        rating: 4,
        imageUrl: '/assets/pizza-6.jpg',
        tags: ['Italian', 'Mexican', 'American']
      },
      {
        id: 7,
        price: 5.25,
        name: "Veggie Fiesta",
        favorite: false,
        rating: 4,
        imageUrl: '/assets/pizza-7.jpg',
        tags: ['Italian','Indian']
      },
      {
        id: 8,
        price: 6,
        name: "Mixed Veggie Treat",
        favorite: false,
        rating: 4,
        imageUrl: '/assets/pizza-8.jpg',
        tags: ['Italian', 'Mexican','American']
      }
    ]
  }
}
