import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/services.service';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {

  quantity: number = 0;

  chairObserver: number = 0;
  
  constructor(private chairNbObserver: ObservableService) { 
  }

  ngOnInit(): void {
    localStorage.setItem('cups', this.quantity.toString());
    this.chairNbObserver.getChairSelectedNb.subscribe(res => this.chairObserver = res);
  }

  increment() {
    this.quantity = this.quantity + 2;
    localStorage.setItem('cups', this.quantity.toString());
  }

  decrement() {
    this.quantity = this.quantity - 2;
    localStorage.setItem('cups', this.quantity.toString());
  }

}
