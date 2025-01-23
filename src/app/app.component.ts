import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';

@Component({
  selector: 'prayati',
  standalone: true,
  imports: [RouterOutlet, StoreComponent, StoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VWITS_online';
}
