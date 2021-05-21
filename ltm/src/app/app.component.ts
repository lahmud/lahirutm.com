import { Component } from '@angular/core';
import { faMedium, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lahiru Tholka-Mudalige';
  faGithub = faGithub;
  faMedium = faMedium; 
  faLinkedin = faLinkedin;
}
