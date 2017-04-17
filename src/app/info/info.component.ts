import { Component, OnInit } from '@angular/core';
import { SystemComponent } from 'harbor-angular';

@Component({
  template: `
  <p>Only a demo</p>
  <clr-tooltip [clrTooltipDirection]="'top-right'" [clrTooltipSize]="'lg'">
        <clr-icon shape="info-circle" size="24"></clr-icon>
        <clr-tooltip-content>
            <span>This is demo to show get data from backend system and show it here through self-published npm package</span>
        </clr-tooltip-content>
    </clr-tooltip>
  <hbr-system></hbr-system>
  <p>Copyright @ VMware</p>
  <clr-tooltip [clrTooltipDirection]="'top-right'">
        <clr-icon shape="info-circle" size="24"></clr-icon>
        <clr-tooltip-content>
            <span>This is only a demo to show import compionents from npm</span>
        </clr-tooltip-content>
    </clr-tooltip>`,
  styles: []
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
