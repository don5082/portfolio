import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-devtag',
  standalone: false,
  templateUrl: './devtag.component.html',
  styleUrl: './devtag.component.css'
})
export class DevtagComponent {
  @Input() data: string = "";
}

