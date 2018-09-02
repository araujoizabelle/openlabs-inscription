import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor() { }
}
