import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BooksComponent } from './books/books.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    DetailsComponent,
    WishlistComponent,
    BooksComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
