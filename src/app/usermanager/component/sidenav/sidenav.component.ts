import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatSidenav} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  users: Observable<User[]>;
  isDarkTheme = false;
  dir = 'ltr';

  constructor(
    zone: NgZone,
    private userService: UserService,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private httpClientModule: HttpClientModule,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'rishi',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/rishi.svg')
    );

  }


  @ViewChild(MatSidenav) sidenav: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
  }

  ngOnInit() {
    this.users = this.userService.users();
    this.userService.loadAll();

    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });

  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
