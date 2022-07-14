import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/services.service';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

  quantity: number = 0;

  cupsObserver: number = 0;
  
  constructor(private cupsNbObserver: ObservableService) { 
  }

  ngOnInit(): void {
    localStorage.setItem('chair', this.quantity.toString());
    this.cupsNbObserver.getCupsSelectedNb.subscribe(res => this.cupsObserver = res);
  }

  increment() {
    this.quantity = this.quantity + 1;
    localStorage.setItem('chair', this.quantity.toString())
  }

  decrement() {
    this.quantity = this.quantity - 1;
    localStorage.setItem('chair', this.quantity.toString())
  }
}
