import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private elementRef: ElementRef,private route:Router) { }
  click1(){
    console.log("it's me duraisamy");
    
  }
  ngOnInit(): void {  
    $('.menu-toggle').click(() =>{
       $(".nav").toggleClass("sidepanel");
       $(this).toggleClass("is-active");
    });
    
  }
  data(){
    const elm = document.querySelector<HTMLElement>('.dropdown-content')!;
    elm.style.display="none";
  }
disp(){
  const elm = document.querySelector<HTMLElement>('.dropdown:hover .dropdown-content')!;
    elm.style.display="block";
}
ndisp(){
  const elm = document.querySelector<HTMLElement>('.dropdown-content')!;
  elm.style.display="none";
}
aboutroute(){
  this.route.navigate(['/about'])
}
contactroute(){
  this.route.navigate(['/contact'])
}
}
