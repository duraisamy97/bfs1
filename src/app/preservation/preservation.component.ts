import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-preservation',
  templateUrl: './preservation.component.html',
  styleUrls: ['./preservation.component.css']
})
export class PreservationComponent implements OnInit {
  backgroundImageStyle: any; 
  constructor(private elementRef: ElementRef,private sanitizer: DomSanitizer) { }

  // ngOnInit(): void {
  //   this.elementRef.nativeElement.ownerDocument .body.style.backgroundImage = 'assets/bfs_logo.jpg';
  // }
  
  ngOnInit(): void {
    this.backgroundImageStyle = this.getBackgroundImageStyle();
  }
  private getBackgroundImageStyle()
  {
      let backgroundImage = './path/to/your/image';
  
      // sanitize the style expression
      const style = `background-image: url(${backgroundImage})`;
      return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
// export class AppComponent implements AfterViewInit {
//   constructor(private elementRef: ElementRef) {}
//   ngAfterViewInit() {
//       this.elementRef.nativeElement.ownerDocument
//           .body.style.backgroundColor = 'yellow';
//   }
// }
