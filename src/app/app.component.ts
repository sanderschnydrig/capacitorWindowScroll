import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  title = 'capacitorWindowScroll';

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    console.log('scrolling: ', event)
  }

  ngAfterViewInit() {
    document.addEventListener('scroll', function(e) {
      console.log('document:scroll: ', e)
    })

    const scroll$ = fromEvent(window, 'scroll')
    scroll$.subscribe((ev) => {
      console.log('fromEvent scroll: ', ev)
    })
  }
}
