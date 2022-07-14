import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { articles, ArticleType } from '../articles-list-mock';
import { ObservableService } from '../services.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnChanges {

  selectedArticle: string | undefined = undefined;
  articles: ArticleType[] = articles

  fullCart: unknown = false;
  numberOfItems: number = 0;
  
  constructor(private cartObserver: ObservableService) { 
  }

  ngOnInit(): void {
    this.cartObserver.getCartState.subscribe(res => this.fullCart = res);
    this.cartObserver.getCartSize.subscribe(res => this.numberOfItems = res);
    console.log(this.fullCart)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.fullCart)    
  }
  

  updateSelectedArticle(articleTitle: string) {
    this.selectedArticle = articleTitle
  }
}
