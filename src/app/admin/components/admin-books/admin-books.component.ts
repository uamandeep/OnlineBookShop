import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/books/services/book.service';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {
  books:any[];
  displayedColumns: string[]= ['title', 'description','category','urlImage','price','actions'];
  constructor(private serviceBooks: BookService) { }

  ngOnInit(): void {
    this.serviceBooks.getAllBooks()
                      .subscribe(books=>this.books=books);
  }

}
