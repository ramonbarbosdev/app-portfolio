import { Component } from '@angular/core';
import { Home } from "../../features/home/home";
import { About } from "../../features/about/about";
import { Projects } from "../../features/projects/projects";
import { Stack } from "../../features/stack/stack";
import { Experience } from "../../features/experience/experience";
import { Contact } from "../../features/contact/contact";

@Component({
  selector: 'app-layout',
  imports: [Home, About, Projects, Stack, Experience, Contact,],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
