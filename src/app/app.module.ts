import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { ArticleComponent } from './store/article/article.component';
import { ChairComponent } from './store/chair/chair.component';
import { CupComponent } from './store/cup/cup.component';
import { ObservableService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ArticleComponent,
    ChairComponent,
    CupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
