import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';

export const routes: Routes = [

    {path:"booklist",component:BooksComponent},
    {path:"techlist",component:TechnologiesComponent}
];
