import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.type';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: ['']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
    this.skills = [
      {
        name: "Typescript",
        class: "devicon-typescript-plain"
      },
      {
        name: "Angular",
        class: "devicon-angularjs-plain"
      },
      {
        name: "NodeJS",
        class: "devicon-nodejs-plain"
      },
      {
        name: "Express",
        class: "devicon-express-original"
      },
      {
        name: "HTML5",
        class: "devicon-html5-plain"
      },
      {
        name: "CSS3",
        class: "devicon-css3-plain"
      },
      {
        name: "Sass",
        class: "devicon-sass-original"
      },
      {
        name: "Bootstrap",
        class: "devicon-bootstrap-plain"
      },
      {
        name: "MongoDB",
        class: "devicon-mongodb-plain"
      },
      {
        name: "MySQL",
        class: "devicon-mysql-plain"
      },
      {
        name: "SQLServer",
        class: "devicon-microsoftsqlserver-plain"
      },
      {
        name: "PostgreSQL",
        class: "devicon-postgresql-plain"
      },
      {
        name: "Java",
        class: "devicon-java-plain"
      },
      {
        name: "Git",
        class: "devicon-git-plain"
      },
      {
        name: "Heroku",
        class: "devicon-heroku-original"
      },
      {
        name: "NPM",
        class: "devicon-npm-original-wordmark"
      },
      {
        name: "Visual Studio Code",
        class: "devicon-visualstudio-plain"
      },
      {
        name: "Adobe XD",
        class: "devicon-xd-plain"
      },
    ];
  }
}
