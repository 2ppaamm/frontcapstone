import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ag';
  ngOnInit() {
	  jQuery(window).load(function() {
	        // will first fade out the loading animation
		jQuery(".status").fadeOut();
	        // will fade out the whole DIV that covers the website.
		jQuery(".preloader").delay(1000).fadeOut("slow");
	});
   
  }
}
