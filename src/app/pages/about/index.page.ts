import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="page-grid">
      <div class="page-grid__wrapper">
        <section>
          <article>
            <h1 class="heading heading--huge">About me</h1>

            <img src="" alt="" />
            <p class="text text--large">Hello there! My name is Andrej and I'm 23-year-old developer from Slovakia. I moved to Denmark in 2020 to challenge myself and study. With more than 2 years of experience. I now have created few useful services and user interfaces for some of the clients. Some words that you might recognize from this stack: <span style="font-weight: bold;">Angular, RxJs, JavaScript (ES6), TypeScript, Node.js, Express.js, Analog.js,  HTML5, Sass (BEM)...</span> Anyway check my <a class="link link--large">Resume</a> or <a class="link link--large">LinkedIn</a>. I love to go for rides. Alone or with my friends. Some of them take more than one day. You can find my progress on <a class="link link--large">Strava</a>.</p>
          </article>
        </section>
      </div>
    </div>
  `,
  styles: ``,
})
export default class HomeComponent {}
