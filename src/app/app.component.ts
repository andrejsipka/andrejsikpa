import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import NavMenuComponent from './components/nav-menu/nav-menu.component';
import NavigationService from './shared/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavMenuComponent
  ],
  template: `
    <div class="layout">
      <app-nav-menu></app-nav-menu>

      <div class="content">
        <main>
          <router-outlet></router-outlet>
        </main>
        <footer>
          Footer
        </footer>
      </div>
    </div>

    @if(isOpen()) {
      <div class="overlay"></div>
    }
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
      height: 100%;

      @media screen and (min-width: 900px) {
        flex-direction: row;
      }
    }

    .content {
      flex-grow: 1;
    }

    .overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: var(--overlay);
      z-index: 99;

      @media screen and (min-width: 900px) {
        display: none;
      }
    }
  `,
})
export class AppComponent {
  private navigationService = inject(NavigationService);

  readonly isOpen = this.navigationService.isOpen;
}
