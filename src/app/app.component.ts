import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private db:AngularFireDatabase){

  }
  ngOnInit(): void {
    this.db.list('/books').valueChanges()
                          .subscribe(books=>console.log(books));
  }
  title = 'online-book-shop';
  
}
