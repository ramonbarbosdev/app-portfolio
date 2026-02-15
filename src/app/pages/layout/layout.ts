import { Component } from '@angular/core';
import { Home } from "../../features/home/home";
import { About } from "../../features/about/about";
import { Projects } from "../../features/projects/projects";
import { Stack } from "../../features/stack/stack";
import { Contact } from "../../features/contact/contact";
import { BackgroundSuface } from "../../components/background-suface/background-suface";
import { Footer } from "../../features/footer/footer";
import { Experience } from "../../features/experience/experience";
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { Header } from "../../feature/header/header";

@Component({
  selector: 'app-layout',
  imports: [Home, About, Projects, Stack, Contact, Footer, Experience, BackgroundSuface, CommonModule, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {




}
