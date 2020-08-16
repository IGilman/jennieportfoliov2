import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  linkedIn() {
    window.open("https://www.linkedin.com/in/jennie-gilman-31093051/");
  }

  instagram() {
    window.open("https://www.instagram.com/jenniegilman/");
  }

  resume() {
    window.open("https://drive.google.com/file/d/1DZiHDuuE9ljYBWIO_xMLhTq9eDiNDBJ-/view?usp=sharing");
  }

  copyEmail(email: string) {
    // this.clicked = !this.clicked;
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = email;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
