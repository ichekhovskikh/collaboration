import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { FooterComponent } from './footer/footer.component';
import { PlacesComponent } from './places/places.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModalContent } from './header/auth/auth.component';
import { RegModalContent } from './header/reg/reg.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    component: StartPageComponent
  },
  { path: 'start-page', component: StartPageComponent },
  { path: 'developments', component: DevelopmentsComponent },
  { path: 'places', component: PlacesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    PlacesComponent,
    DevelopmentsComponent,
    AuthModalContent,
    RegModalContent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    PlacesComponent,
    DevelopmentsComponent,
    RouterModule
  ],
  providers: [],
  entryComponents: [AuthModalContent,RegModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
