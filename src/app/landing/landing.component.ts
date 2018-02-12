import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'ag-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  jQuery(window).load(function() {
	        // will first fade out the loading animation
		jQuery(".status").fadeOut();
	        // will fade out the whole DIV that covers the website.
		jQuery(".preloader").delay(10).fadeOut("slow");

	});

   $(".video-container").fitVids();

	/* =================================
	===  OWL CROUSEL               ====
	=================================== */
	$(document).ready(function () {

	    $("#feedbacks").owlCarousel({

	        navigation: false, // Show next and prev buttons
	        slideSpeed: 800,
	        paginationSpeed: 400,
	        autoPlay: 5000,
	        singleItem: true
	    });

	    var owl = $("#screenshots");

	    owl.owlCarousel({
	        items: 4, //10 items above 1000px browser width
	        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
	        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
	        itemsTablet: [600, 1], //2 items between 600 and 0
	        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
	    });


	});
  }

}
