import { Component, OnInit } from '@angular/core';
import { SystemComponent } from 'harbor-angular';

@Component({
  template: `<hbr-system [hbrSystemEndpoint]="'/api/systeminfo'"></hbr-system>`,
  styles: []
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
