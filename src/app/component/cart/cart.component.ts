import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private router:Router)
  {

  }
  cartItems: any;
  totalPrice: any;
  loadCart(): void {
      const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
      this.cartItems = cartData;
      this.calculateTotalPrice(); // Get items from local storage
  }
  ngOnInit(): void {
    this.loadCart(); // Load cart items when the component initializes
  }
  deleteItem(index: number): void {
    
    this.cartItems.splice(index, 1);
  
   
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  
    
    this.calculateTotalPrice();
  }
  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
  }
  pay(): void {
    if (this.cartItems.length > 0) {
      alert('Proceeding to payment...');
  
      // Save the current cart items to orders
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      localStorage.setItem('orders', JSON.stringify([...existingOrders, ...this.cartItems]));
  
      // Clear the cart
      localStorage.removeItem('cart');
      this.cartItems = [];
      this.totalPrice = 0;
  
      alert('Payment successful! Thank you for your purchase.');
  
      // Navigate to the orders page
      this.router.navigateByUrl('/orders');
    } else {
      alert('Your cart is empty. Please add items to the cart first.');
    }
  }
  
  }
