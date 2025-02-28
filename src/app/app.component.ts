import { Component } from '@angular/core';
import {DorvakUiModule} from 'dorvak-ui';
import {LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [
    DorvakUiModule,
    LucideAngularModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
