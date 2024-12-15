import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  username: string = '';
  items: any;
  isLoading: boolean;
  filteredItems: any[] = [];
  searchQuery: any;

  constructor(private router: Router,private service:ServiceService) {}

  ngOnInit(): void {
    // Retrieve email from local storage
    const storedLogin = localStorage.getItem('login');
    this.username = storedLogin ? JSON.parse(storedLogin) : 'Guest';
    this.loadItems();
  }
logout()
{
  localStorage.removeItem('login');
  this.router.navigateByUrl('/login');
}
loadItems(): void {
  this.service.select().subscribe(
    (data) => {
      this.items = data; 
      this.filteredItems =data;
      this.isLoading = false;
    },
    (error) => {
      console.error('Error loading items:', error); 
      this.isLoading = false; 
    }
  );
}

addToCart(item: any): void {
  console.log('Adding to cart:', item); // Debug log
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${item.name} has been added to your cart!`);
}
goToCart(): void {
  this.router.navigateByUrl('/cart');
}
searchItems(): void {
  if (this.searchQuery.trim() === '') {
    this.filteredItems = this.items; // If no query, show all items
  } else {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) // Filter based on item name
    );
  }
}

url="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/share/1f6d2.jpg"
goToProfile() {
  this.router.navigate(['/myprofile']);
}

goToOrders() {
  this.router.navigate(['/orders']);
}

goToCoupons() {
  this.router.navigate(['/coupons']);
}

goToNotifications() {
  this.router.navigate(['/notification']);
}
}