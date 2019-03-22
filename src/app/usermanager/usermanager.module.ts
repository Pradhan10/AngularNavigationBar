import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import {MainContentComponent} from './component/main-content/main-content.component';
import {UsermanagerAppComponent} from './usermanager-app.component';
import {ToolbarComponent} from './component/toolbar/toolbar.component';
import {NewContactDialogComponent} from './component/new-contact-dialog/new-contact-dialog.component';
import {SidenavComponent} from './component/sidenav/sidenav.component';
import {AddressString} from '../shared/get-address.pipe';


const routes: Routes = [
  {
    path: '', component: UsermanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  declarations: [
    UsermanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NewContactDialogComponent,
    AddressString
  ],
  entryComponents: [
    NewContactDialogComponent
  ]
})
export class UsermanagerModule { }
