import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from './store/store.module';

@Component({
  selector: 'prayati',
  standalone: true,
  imports: [RouterOutlet, StoreModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VWITS_online';
}
