import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css',],
})
export class HomepageComponent {
  pageTitles: string[] = [PageTitles.Homepage, PageTitles.About, PageTitles.Pricing, PageTitles.Login];
}

export enum PageTitles {
  Homepage = "Homepage",
  About = "About Me",
  Pricing = "Projects",
  Login = "Socials",
  
}
