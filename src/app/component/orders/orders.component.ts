import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: any=[];
  ngOnInit(): void {
    // Fetch orders from localStorage
    this.orders = JSON.parse(localStorage.getItem('orders') || '[]');
}
deleteOrder(index: number): void {
  if (confirm('Are you sure you want to cancel this item?')) {
    // Remove the item from the array
    this.orders.splice(index, 1);

    // Update localStorage
    localStorage.setItem('orders', JSON.stringify(this.orders));

    alert('Order item cancel successfully.');
  }
}
}
