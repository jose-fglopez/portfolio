import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/interfaces/role.type';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styles: ['']
})
export class ExperienceComponent implements OnInit {


  roles: Role[] = [];

  constructor() { }

  selectRole(selected: number) {

    let current_selected = this.roles.map(item => item.index).indexOf(this.roles.length - 1);
    let selected_index = this.roles[selected].index;

    this.roles[selected].index = this.roles.length - 1;
    this.roles[current_selected].index = selected_index;

  }

  ngOnInit(): void {

    this.roles = [
      {
        id: 1,
        index: 0,
        color: "primary",
        image_url: "assets/img/sabadell.svg",
        name: "Ingeniero Software",
        tasks: [
          "Programación Back-End",
          "Automatización de procesos",
          "Resolución de incidencias"
        ],
        skills: [
          { name: 'Java', class: "devicon-java-plain colored" },
          { name: 'SQLServer', class: "devicon-microsoftsqlserver-plain colored" },
          { name: 'Bash', class: "devicon-bash-plain" }
        ]
      },
      {
        id: 2,
        index: 1,
        color: "tertiary",
        image_url: "assets/img/renr.svg",
        name: "Analista Programador",
        tasks: [
          "Programación Full-Stack",
          "Análisis de requisitos",
          "Mantenimiento de aplicaciones"
        ],
        skills: [
          { name: 'GIT', class: "devicon-git-plain colored" },
          { name: 'MongoDB', class: "devicon-mongodb-plain colored" },
          { name: 'CSS3', class: "devicon-css3-plain colored" },
          { name: 'HTML5', class: "devicon-html5-plain colored" },
          { name: 'MySQL', class: "devicon-mysql-plain colored" },
          { name: 'Java', class: "devicon-java-plain colored" }
        ]
      },
      {
        id: 3,
        index: 2,
        color: "secondary",
        image_url: "assets/img/accenture.svg",
        name: "Analista Sénior",
        tasks: [
          "Diseño de aplicaciones I+D",
          "Programación Full-Stack",
          "Automatización de procesos QA"
        ],
        skills: [
          { name: 'Angular', class: "devicon-angularjs-plain colored" },
          { name: 'NodeJS', class: "devicon-nodejs-plain colored" },
          { name: 'HTML5', class: "devicon-html5-plain colored" },
          { name: 'CSS3', class: "devicon-css3-plain colored" },
          { name: 'MongoDB', class: "devicon-mongodb-plain colored" },
          { name: 'GIT', class: "devicon-git-plain colored" }
        ]
      }
    ];
  }
}
