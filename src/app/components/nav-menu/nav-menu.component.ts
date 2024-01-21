import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { RouterLink } from "@angular/router";
import { NgClass, NgStyle } from "@angular/common";
import NavigationService from "../../shared/navigation.service";

type NavLinks = {
  label: string,
  path: string
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ThemeToggleComponent,
    RouterLink,
    NgClass,
    NgStyle
  ],
  template: `
    <header class="header">
      <div class="header__bar" [ngStyle]="{'position': isOpen() ? 'fixed' : 'absolute'}">
        <button type="button" class="header__menu-button" (click)="openMenu()">
          <i class="material-symbols-outlined">{{isOpen() ? 'close' : 'menu'}}</i>
        </button>

        <a routerLink="/" class="header__logo logo">Andrej Sipka</a>

        <app-theme-toggle></app-theme-toggle>
      </div>

      <nav class="header__nav header__nav--hidden" [ngClass]="{'header__nav--hidden': !isOpen()}">
        <ul class="header__nav-list">
          @for(item of navLinks; track item.label) {
            <li (click)="closeMenu()">
              <a [routerLink]="item.path" class="button button__secondary">
                {{item.label}}
                <i class="material-symbols-outlined">arrow_forward</i>
              </a>
            </li>
          }
        </ul>
      </nav>
    </header>
  `,
  styles: `
    :host {
      width: 100%;
      flex-shrink: 0;

      @media screen and (min-width: 900px) {
        width: 316px;
        height: 100dvh;
        position: sticky;
        top: 0;
      }
    }

    .header {
      padding: 0 1.6rem;
      position: relative;
      height: max-content;

      @media screen and (min-width: 900px) {
        padding-top: 100px;
      }


      &__bar {
        padding: 0 1.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;

        @media screen and (max-width: 899px) {
          position: absolute;
          width: 100%;
          z-index: 101;
          top: 0;
          left: 0;
        }

        @media screen and (min-width: 900px) {
          position: relative !important;
        }
      }

      &__logo {
        @media screen and (max-width: 899px) {
          padding-left: 36px;
        }
      }

      &__menu-button {
        display: none;
        position: absolute;
        z-index: 110;
        color: var(--button-text-color);

        & > i {
          font-size: 24px;
        }

        @media screen and (max-width: 899px) {
          display: inline-block;
        }
      }

      &__nav {
        @media screen and (max-width: 899px) {
          position: fixed;
          background-color: var(--background);
          width: 100%;
          height: max-content;
          top: 0;
          left: 0;
          z-index: 100;
          padding: 80px 0 16px 0;
          border-radius: 0 0 10px 10px;
        }

        @media screen and (min-width: 900px) {
          display: block !important;
        }

        &--hidden {
          display: none;
        }
      }

      &__nav-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  `
})
export default class NavMenuComponent {
  private navigationService = inject(NavigationService);
  readonly isOpen: any = this.navigationService.isOpen;

  navLinks: NavLinks[] = [
    { label: 'Home', path: '/'},
    { label: 'About', path: '/about'},
  ];

  openMenu(): void {
    this.navigationService.toggleMenu();
  }

  closeMenu(): void {
    this.navigationService.toggleMenu(false);
  }
}
