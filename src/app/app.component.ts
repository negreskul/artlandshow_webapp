import { Component } from '@angular/core';
import { faInstagram, faVk, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faInstagram = faInstagram;
  faVk = faVk;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  
  title = 'artlandshow-app';
}
