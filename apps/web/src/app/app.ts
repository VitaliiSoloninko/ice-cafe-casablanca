import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeaderComponent,
  FooterComponent,
} from '@ice-cafe-casablanca/ui-layout';

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'web';
}
