import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllBooksComponent } from './page/all-books/all-books.component';
import { NavComponent } from './common/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AllBooksComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library_managment_frontend';
}
