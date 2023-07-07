import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-qapages',
  templateUrl: './qapages.component.html',
  styleUrls: ['./qapages.component.css']
})
export class QApagesComponent {
  farcon = faStar;
  faques = faQuestion;
}
