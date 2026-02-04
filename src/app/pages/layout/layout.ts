import { Component } from '@angular/core';
import { Home } from "../../features/home/home";
import { About } from "../../features/about/about";
import { Projects } from "../../features/projects/projects";

@Component({
  selector: 'app-layout',
  imports: [Home, About, Projects],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
