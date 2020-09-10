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

  irelandLink() {
    window.open("https://drive.google.com/file/d/1snQojBCueOZ3TxFCXJavxlrWytpPPavc/view?usp=sharing");
  }

  conanLink() {
    window.open("https://www.youtube.com/watch?v=YV9EbYpXfZs");
  }

  islandLink() {
    window.open("https://paidpost.newyorker.com/article/irelandsvoices/");
  }

  tripAdvisor() {
    window.open("https://drive.google.com/file/d/1_H9gD01ekTi5yVfkpNdXvZDw6FJtXKNU/view?usp=sharing")
  }

  hertz() {
    window.open("https://drive.google.com/file/d/10KDwoyASdJhhp4r3cJlNCDfH-O459Arl/view?usp=sharing")
  }

  claws() {
    window.open("https://drive.google.com/file/d/1TZnHV2PJbOIrwxrCgMF6I7vs4b76KUZS/view?usp=sharing")
  }




}
