import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-end';
  showTestDialog = false;

  onTestTakeClick() {
    this.showTestDialog = true;
  }

  testClosed(event) {
    this.showTestDialog = false;
  }
}
