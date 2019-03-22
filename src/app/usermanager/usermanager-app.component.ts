import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-usermanager-app',
  template: `
    <h2>USER MANAGER WORKS</h2>
    <app-sidenav></app-sidenav>
  `,
  styles: []
})

export class UsermanagerAppComponent  implements  OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/rishi.svg'));
  }

  ngOnInit() {
  }

}
