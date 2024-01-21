import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

type Project = {
  id: number,
  title: string,
  description: string,
  link: string,
  src: string
}

@Component({
  selector: 'app-project-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="project-item">
      @if(project) {
        <div class="project-item__image-container">
          <img [src]="project.src" alt="" />
        </div>
        <div class="project-item__details">
          <h2 class="heading heading--large">{{ project.title }}</h2>
          <p class="text text--base u-margin-bottom--base">{{ project.description }}</p>

          <a [attr.href]="project.link" target="_blank" class="link">View</a>
        </div>
      }
    </article>
  `,
  styles: `
    .project-item {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &__image-container {
        height: 256px;
        border-radius: 10px;
        overflow: hidden;
        border: 1px solid var(--border-color);

        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
      }

      &__details {
        & .text {
          max-width: 80%;
        }
      }
    }
  `
})
export default class ProjectItemComponent {
  @Input() project: Project | null = null;
}
