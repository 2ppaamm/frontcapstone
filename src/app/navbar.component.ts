import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'ag-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

	/* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK - ADDED ON V1.5*/

	if (matchMedia('(max-width: 480px)').matches) {
	    $('.main-navigation a').on('click', function () {
	        $(".navbar-toggle").click();
	    });
	}


   /* NAVIGATION VISIBLE ON SCROLL */

	$(document).ready(function () {
	    mainNav();
	});

	$(window).scroll(function () {
	    mainNav();
	});

	function mainNav() {
	    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	    if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});
        else $('.sticky-navigation').stop().animate({"top": '-120'});
    }

  }
}
