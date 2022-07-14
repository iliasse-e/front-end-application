import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private isfullCart = (): boolean => {
    const chairs = localStorage.getItem('chair');
    const cups = localStorage.getItem('cups');
    if (chairs !== null && cups !== null) {
      if (JSON.parse(chairs) + JSON.parse(cups) > 10) return true;
    }
    return false
  }

  private cartSize = (): number => {
    let itemNb: number = 0;
    const chairs = localStorage.getItem('chair');
    const cups = localStorage.getItem('cups');
    if (chairs !== null && cups !== null) {
      itemNb = JSON.parse(chairs) + JSON.parse(cups);
    }
    return itemNb
  }

  // If the user cart is full or not
  getCartState = new Observable<boolean>(observer => {
    setInterval(() => {
        return observer.next(this.isfullCart())
    }, 3000);
  })

  // gets the number of items in the cart
  getCartSize = new Observable<number>(observer => {
    setInterval(() => {
        return observer.next(this.cartSize())
    }, 3000);
  })

  // number of chairs pushed in the cart by the user
  getChairSelectedNb = new Observable<number>(observer => {
    const interval = setInterval(() => {
        const quantity: string | null = localStorage.getItem('chair');
        if (quantity !== null) {
          if (this.isfullCart())  {
            observer.complete()
          }
          else {
            observer.next(JSON.parse(quantity));
            console.log('quantity of chair updated');
          }
        }
        else {
          observer.next(0)
          console.log('null quantity of chair updated');
        }
      }, 5000);
  
      return () => {
        clearInterval(interval);
      };
  });

  // number of cups pushed in the cart by the user
  getCupsSelectedNb = new Observable<number>(observer => {
    const interval = setInterval(() => {
        const quantity: string | null = localStorage.getItem('cups');
        if (quantity !== null) {
          if (this.isfullCart())  {
            observer.complete()
          }
          else {
            observer.next(JSON.parse(quantity));
            console.log('quantity of cups updated');
          }
        }
        else {
          observer.next(0)
          console.log('null quantity of cups updated');
        }
      }, 5000);
  
      return () => {
        clearInterval(interval);
      };
  });
  
  constructor() { }
  
}
