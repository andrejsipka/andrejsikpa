import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="footer__container">
        <p class="footer__copyright text text--base">© 2024 Andrej Sipka. All rights reserved.</p>

        <ul class="footer__list">
          <li><a class="link link--base link--decoration-none" href="">Email</a>
          <li><a class="link link--base link--decoration-none" href="">GitHub</a>
          <li><a class="link link--base link--decoration-none" href="">LinkedIn</a>
        </ul>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      border-top: 1px solid var(--border-color);

      &__container {
        padding: 30px 16px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 16px;

        @media screen and (min-width: 900px) {
          flex-direction: row;
        }
      }

      &__list {
        order: 1;
        display: flex;
        gap: 36px;

        @media screen and (min-width: 900px) {
          order: 2;
          flex-direction: row;
        }
      }

      &__copyright {
        order: 2;

        @media screen and (min-width: 900px) {
          order: 1;
          flex-direction: row;
        }
      }
    }
  `
})
export default class FooterComponent {}
