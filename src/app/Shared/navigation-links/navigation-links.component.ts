import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.css']
})
export class NavigationLinksComponent implements OnInit {
 navState:boolean = false;
 bars:string = "assets/icons/bars.svg";
 close:string = "assets/icons/close.svg"

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.navState = !this.navState;
  }

  closeNavbar(event:boolean){
    this.navState = event;
  }


}
