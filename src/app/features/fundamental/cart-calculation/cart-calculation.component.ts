import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-calculation',
  imports: [FormsModule],
  templateUrl: './cart-calculation.component.html',
  styleUrl: './cart-calculation.component.scss',
})
export class CartCalculationComponent {
  quantity: number = 1;
  pricePerItem: number = 100;

  get totalPrice(): number {
    return this.quantity * this.pricePerItem;
  }
}
