import { Component } from '@angular/core';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent {
  coupons = [
    {
      title: '10% Off on Orders Above $50',
      description: 'Use the code DISCOUNT10 to get 10% off your next order over $50.',
      code: 'DISCOUNT10'
    },
    {
      title: 'Free Shipping on Orders Over $30',
      description: 'Use the code FREESHIP to get free shipping on any order over $30.',
      code: 'FREESHIP'
    },
    {
      title: '$5 Off Your Next Purchase',
      description: 'Use the code SAVE5 to get $5 off your next purchase.',
      code: 'SAVE5'
    }
  ];
  ngOnInit(): void {
  }

  // Logic to apply coupon (you can implement further logic here)
  applyCoupon(couponCode: string) {
    alert(`Coupon Applied: ${couponCode}`);
  }
}
