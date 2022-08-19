import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= prefix %>-<%= dasherize(name) %>',
  standalone: true,
  imports: [],
  template: `
    <p><%= classify(name) %>Component works!</p>
  `,
  styles: [``]
})
export class <%= classify(name) %>Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
