import { Component, OnInit } from '@angular/core';
import { articles, ArticleType } from '../articles-list-mock';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  selectedArticle: string | undefined = undefined;
  articles: ArticleType[] = articles
  
  constructor() { }
  
  ngOnInit(): void {
  }

  updateSelectedArticle(articleTitle: string) {
    this.selectedArticle = articleTitle
  }
}
