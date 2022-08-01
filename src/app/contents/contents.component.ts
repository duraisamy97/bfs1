import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }
con(){
  console.log('durai')
}
}
