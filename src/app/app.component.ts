import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maxangularproject';
  loadedNavOption = 'recipe';

  onNavigate(navOption: string) {
    this.loadedNavOption = navOption;
  }
}
