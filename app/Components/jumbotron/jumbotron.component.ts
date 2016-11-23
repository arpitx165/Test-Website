import { Component } from '@angular/core';
@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
   private jbtHeading:string;
   private jbtText:string;
   private jbtBtnText:string;
   private jbtBtnUrl:string;
   constructor() {
     this.jbtHeading ="Hello";
     this.jbtText = "Bootstrap ships with vanilla CSS, but its source code utilizes the two most popular CSS preprocessors, Less and Sass. Quickly get started with precompiled CSS or build on the source.";
     this.jbtBtnText = "ReadMore";
     this.jbtBtnUrl ="/about";
   }

}
