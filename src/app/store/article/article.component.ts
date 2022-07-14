import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { articles, ArticleType } from 'src/app/articles-list-mock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  isSelected = false;
  @Input() item: ArticleType = articles[2];
  @Output() selectedArticle:any = new EventEmitter<ArticleComponent>()
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.item)
  }

  addToBasket() {
    this.selectedArticle.emit(this.item.title)
    this.isSelected = true
    console.log(`vous avez ajouté l'objet ${this.item.title} au panier`)
  }

  dropItem() {
    this.isSelected = false
    this.selectedArticle.emit(undefined)
  }

}
