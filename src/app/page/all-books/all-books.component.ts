import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent implements OnInit{
  private http;
  public bookList : any ={};
  public selectedBook : any;
  constructor(private httpClient : HttpClient){
      this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(){
    this.http.get('http://localhost:8080/book/get').subscribe((data)=>{
      this.bookList = data;
      console.log(this.bookList);
    });
  }
  deleteBook(book: any) {
    this.http.delete(`http://localhost:8080/book/${book.id}`,{responseType:'text'}).subscribe({
      next: (data) => {
        this.loadBooks();
        console.log("Delete successfulldd:", book.id);
      },
      error: (error) => {
        console.error("Delete failed:", error);
      }
    });
  }

  setSelectedBook(Book : any){
    this.selectedBook = Book;
    console.log(this.selectedBook);
  }
  saveBook(){
    let postApi = "http://localhost:8080/book/add";
    console.log(this.selectedBook);
    this.http.post(postApi,this.selectedBook).subscribe((data)=>{
      // console.log(data);
    });
  }
}
