import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

/*Local imports*/
import {AppComponent} from './app.component';
import {UsermanagerAppComponent} from './usermanager/usermanager-app.component';

const routes: Routes = [
  { path: 'usermanager', loadChildren: './usermanager/usermanager.module#UsermanagerModule' },
  { path: '**', redirectTo: 'usermanager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
