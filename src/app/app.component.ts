import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div class="container">
      <h1>Reactive forms</h1>
      <hero-list-component>Loading hero component</hero-list-component>    
    </div>
  `
})
export class AppComponent  { name = "Angular"; }
