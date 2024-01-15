import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";


@Component({
  selector: 'app-nav-menu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ThemeToggleComponent,
    RouterLink,
    NgClass
  ],
  template: `
    <header class="site-header">
      <div class="nav-bar-mobile">
        <div class="nav-bar-mobile__logo-wrapper">
          <button type="button" class="burger-icon" (click)="toggleMenu()">
            <i class="material-symbols-outlined">menu</i>
          </button>
          <a routerLink="/" class="logo">Andrej Sipka</a>
        </div>
        <app-theme-toggle></app-theme-toggle>
      </div>

      <div class="nav-bar">
        <a routerLink="/" class="logo">Andrej Sipka</a>
        <app-theme-toggle></app-theme-toggle>
      </div>

      <div class="nav-menu" [ngClass]="{'nav-menu--hidden': !isOpen()}">
        <button type="button" class="burger-icon" (click)="toggleMenu(false)">
          <i class="material-symbols-outlined">close</i>
        </button>
        <nav>
          <ul class="nav-menu__nav-list">
            <li>
              <a routerLink="/" class="button button__secondary" (click)="toggleMenu(false)">
                Home
                <i class="material-symbols-outlined">arrow_forward</i>
              </a>
            </li>

            <li>
              <a routerLink="/about" class="button button__secondary" (click)="toggleMenu(false)">
                About
                <i class="material-symbols-outlined">arrow_forward</i>
              </a>
            </li>
          </ul>
        </nav>

        <div class="nav-menu__links">
          <a href="mailto:andrei.sipka@gmail.com" class="button button__secondary">Email</a>
          <a href="https://github.com/andrejsipka" target="_blank" class="button button__secondary">GitHub</a>
          <a href="https://linkedin.com/in/andrejsipka" target="_blank" class="button button__secondary">LinkedIn</a>
        </div>
      </div>
    </header>
  `,
  styles: `
    :host {
      width: 100%;
      height: 100px;
      flex-shrink: 0;

      @media screen and (min-width: 900px) {
        width: 316px;
        height: 100dvh;
        position: sticky;
        top: 0;
      }
    }

    .site-header {
      height: 100%;

      @media screen and (min-width: 900px) {
        padding-top: 100px;
        padding-bottom: 72px;
      }
    }

    .nav-bar-mobile {
      height: 48px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media screen and (min-width: 900px) {
        display: none;
      }

      &__logo-wrapper {
        display: flex;
        align-items: center;
      }
    }

    .nav-bar {
      height: 48px;
      display: none;
      margin-bottom: 16px;

      @media screen and (min-width: 900px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .nav-menu {
      @media screen and (max-width: 899px) {
        position: fixed;
        padding: 1rem;
        background-color: var(--background);
        width: 100%;
        height: max-content;
        top: 0;
        left: 0;
        z-index: 100;
      }

      &--hidden {
        display: none;
      }

      @media screen and (min-width: 900px) {
        height: calc(100% - 48px - 16px);
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
      }

      &__nav-list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media screen and (max-width: 899px) {
          margin-bottom: 10px;
        }
      }

      &__links {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }

    .burger-icon,
    .close-icon {
      color: var(--button-text-color);
      margin-right: 16px;

      @media screen and (min-width: 900px) {
        display: none;
      }

      & > i {
        font-size: 3rem;
      }
    }

    .burger-icon { margin-right: 16px; }
  `
})
export default class NavMenuComponent {
  protected isOpen: WritableSignal<boolean> = signal(false);

  toggleMenu(state?: boolean | undefined):void {
    this.isOpen.set(state !== undefined ? state : !this.isOpen());
  }
}
