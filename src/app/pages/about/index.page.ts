import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="page-layout">
      <section class="about u-margin-bottom--huge">
        <article>
          <h1 class="heading heading--huge">About me</h1>

          <img src="/me.jpg" alt="Andrej Sipka picture" class="about__picture" />

          <p class="text text--large">
            Hello there! My name is Andrej and I’m 23-year-old web developer from Slovakia living in Aalborg, Denmark.
          </p>

          <p class="text text--large">
            I have more than 2 years of experience working with frontend technologies. These days I seek for more knowledge in backend technologies to improve my skill set. However, frontend is my primary focus. For the past 2 years I have been working with <span style="font-weight: bold;">TypeScript, Angular, RxJs</span> on on daily basis. To become better, I work on my personal projects and read. Anyway check my <a class="link link--large">Resume</a> or <a class="link link--large">LinkedIn</a>.
          </p>

          <p class="text text--large">
          Besides, I enjoy cycling and running as well. Those activities thought me work ethic and dedication that I apply in my work as a developer. You can find my progress here on <a class="link link--large">Strava</a>.
          </p>
        </article>
      </section>
    </div>
  `,
  styles: `
    .about {

      &__picture {
        filter: gray;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
        border-radius: 10px;
        width: 200px;
        margin-bottom: 16px;
      }

      & article .text {
        margin-bottom: 24px;
      }
    }
  `,
})
export default class HomeComponent {}
