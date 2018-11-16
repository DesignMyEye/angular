import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempvcp',
  templateUrl: './tempvcp.component.html',
  styleUrls: ['./tempvcp.component.scss']
})
export class TempvcpComponent implements OnInit {
   
 
    constructor() { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('ecommerce');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('ecommerce');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
}
