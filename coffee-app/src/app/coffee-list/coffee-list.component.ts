// coffee-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {
  coffeeData: any;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeService.getCoffeeData().subscribe((data) => {
      this.coffeeData = data;
    });
  }
}
