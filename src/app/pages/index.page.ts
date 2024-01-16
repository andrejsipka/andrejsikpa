import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import ProjectItemComponent from '../components/project-item/project-item.component';

type Project = {
  id: number,
  title: string,
  description: string,
  link: string
}

@Component({
  standalone: true,
  imports: [
    RouterLink,
    ProjectItemComponent
  ],
  template: `
    <div class="page-layout">
      <section class="hero">
        <article>
          <h1 class="heading heading--huge">Hello! I’m Andrej, Frontend Developer</h1>
          <p class="text text--large u-margin-bottom--large">I’m building scaleable web applications. Besides that I’m continuously working on my skills and with curiosity exploring new technologies and approaches.</p>
          <div>
            <a routerLink="/about" class="button button--max-width button__primary">
              About
              <i class="material-symbols-outlined">arrow_forward</i>
            </a>
          </div>
        </article>
      </section>

      <section class="u-margin-bottom--huge">
        <h1 class="heading heading--xlarge">Work</h1>
        <div class="projects">
          @for(project of projects(); track project.id) {
            <app-project-item [project]="project"></app-project-item>
          }
        </div>
      </section>
    </div>
  `,
  styles: `
    section {
      padding: 0 16px;
    }

    section:not(:last-child) {
      margin-bottom: 200px;
    }

    .hero {
      & article .text {
        max-width: 600px;
      }
    }

    .projects {
      display: grid;
      grid-template-columns: 1fr;
      gap: 36px;

      @media screen and (min-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
    }
  `,
})
export default class HomeComponent implements OnInit {
  protected projects: WritableSignal<Project[]> = signal([]);

  ngOnInit(): void {
    this.projects.set([
      { id: 1, title: 'Henkai architekti', description: 'Portfolio website for architects to showcase their projects', link: 'https://henkai.cz' },
      { id: 2, title: 'Andrej Sipka', description: 'Personal portfolio to promote myself with just one link', link: '' }
    ]);
  }
}
