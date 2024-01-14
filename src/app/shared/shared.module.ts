import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedNavbarComponent } from './components/shared-navbar/shared-navbar.component';
import { SharedFooterComponent } from './components/shared-footer/shared-footer.component';
import { SharedSearchComponent } from './components/shared-search/shared-search.component';
import { SharedMenuComponent } from './components/shared-menu/shared-menu.component';


@NgModule({
  declarations: [
    SharedNavbarComponent,
    SharedFooterComponent,
    SharedSearchComponent,
    SharedMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedNavbarComponent,
    SharedFooterComponent,
    SharedSearchComponent,
    SharedMenuComponent
  ]
})
export class SharedModule { }
