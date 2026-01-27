import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

@Component({
  imports: [RouterModule, TabsPage],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'casablanca-mobile';
}
