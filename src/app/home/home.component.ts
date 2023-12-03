import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { Pizzas } from '../shared/models/pizza';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  pizzas: Pizzas[]= [];
  constructor(private ps: PizzaService, private router: ActivatedRoute){

  }

  ngOnInit(): void {

    this.router.params.subscribe(params=>{
      if(params['searchItem'])
      this.pizzas= this.ps.getAll().filter(pizza=> pizza.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.pizzas= this.ps.getAllPizzasByTags(params['tag']);
      else
      this.pizzas= this.ps.getAll();
    })
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
  }
}
