import { Component } from '@angular/core';
import { Home } from "../../features/home/home";
import { About } from "../../features/about/about";
import { Projects } from "../../features/projects/projects";
import { Stack } from "../../features/stack/stack";
import { Contact } from "../../features/contact/contact";
import { BackgroundSuface } from "../../components/background-suface/background-suface";
import { Footer } from "../../features/footer/footer";
import { Experience } from "../../features/experience/experience";

@Component({
  selector: 'app-layout',
  imports: [Home, About, Projects, Stack, Contact, BackgroundSuface, Footer, Experience],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
