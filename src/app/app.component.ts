import { Component, HostListener } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'capacitorWindowScroll';

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    console.log('scrolling: ', event)
  }
}
