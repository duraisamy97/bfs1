import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { InspectionComponent } from './inspection/inspection.component';
import { PreservationComponent } from './preservation/preservation.component';
import { BidComponent } from './bid/bid.component';
import { ReviewComponent } from './review/review.component';
import { LandscapingComponent } from './landscaping/landscaping.component';
import { CommunicationComponent } from './communication/communication.component';
import { ValueaddedComponent } from './valueadded/valueadded.component';
import { ContentsComponent } from './contents/contents.component';

const routes: Routes = [
  {path:'',component:ContentsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'inspection',component:InspectionComponent},
  {path:'preservation',component:PreservationComponent},
  {path:'estimate creation or bid submission',component:BidComponent},
  {path:'proprty level review',component:ReviewComponent},
  {path:'landscaping management',component:LandscapingComponent},
  {path:'communication',component:CommunicationComponent},
  {path:'value added services',component:ValueaddedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
