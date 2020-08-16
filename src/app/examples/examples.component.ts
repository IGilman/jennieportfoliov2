import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  islandLink() {
    window.open("https://paidpost.newyorker.com/article/irelandsvoices/");
  }

  conanLink() {
    window.open("https://www.youtube.com/watch?v=YV9EbYpXfZs");
  }

  irelandLink() {
    window.open("https://drive.google.com/file/d/1oOzIixJtAM8O3xVHxU9IjBRAunIyxms2/view");
  }

  tripAdvisor() {
    window.open("https://drive.google.com/file/d/157V1CALGN9Krc3MVBxPLn_sSXdVkgID9/view?usp=sharing")
  }

  chicago() {
    window.open("https://drive.google.com/file/d/1dA1AKC-upwQsQ_ULCh7AOmmvVATWefka/view?usp=sharing")
  }

  claws() {
    window.open("https://drive.google.com/file/d/1TZnHV2PJbOIrwxrCgMF6I7vs4b76KUZS/view?usp=sharing")
  }




}
