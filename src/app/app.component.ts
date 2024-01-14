import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import NavMenuComponent from './components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavMenuComponent
  ],
  template: `
    <div class="layout">
      <app-nav-menu></app-nav-menu>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: `
    :host {
      display: block;
      max-width: 1312px;
      width: 100%;
      min-height: 100vh;
    }

    .layout {
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: 100%;
      padding: 0 1rem;

      @media screen and (min-width: 900px) {
        flex-direction: row;
      }
    }

    .content {
      flex-grow: 1;

      @media screen and (min-width: 900px) {
        padding-top: 100px;
      }
    }
  `,
})
export class AppComponent {}
