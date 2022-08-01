import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ContentsComponent } from './contents/contents.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InspectionComponent } from './inspection/inspection.component';
import { PreservationComponent } from './preservation/preservation.component';
import { BidComponent } from './bid/bid.component';
import { ReviewComponent } from './review/review.component';
import { LandscapingComponent } from './landscaping/landscaping.component';
import { CommunicationComponent } from './communication/communication.component';
import { ValueaddedComponent } from './valueadded/valueadded.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ContentsComponent,
    AboutComponent,
    ContactComponent,
    InspectionComponent,
    PreservationComponent,
    BidComponent,
    ReviewComponent,
    LandscapingComponent,
    CommunicationComponent,
    ValueaddedComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
