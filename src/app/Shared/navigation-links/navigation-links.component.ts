import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.css']
})
export class NavigationLinksComponent implements OnInit {
 navState:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.navState = !this.navState;
    console.log(this.navState);

  }



}
