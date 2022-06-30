import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {path:"wishList", component: WishlistComponent},
  {path: "books", component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
