import { Component } from '@angular/core';
import { Home } from "../../features/home/home";

@Component({
  selector: 'app-layout',
  imports: [Home],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
