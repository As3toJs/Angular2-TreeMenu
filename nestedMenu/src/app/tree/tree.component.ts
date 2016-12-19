import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  template: `
  <div [ngStyle]="{background:'dodgerblue', padding:'10px', width:'20em'}">Main Menu</div>
  <ul [ngStyle]="{background:'black', color:'white',padding:'10px', width:'20em'}">
    <div *ngFor="let item of data">
      <app-node [item]=item></app-node>
    </div>
  </ul>`,
  styleUrls:[`./tree/tree.component.css`]
})

export class TreeComponent implements OnInit {
@Input() data;
  constructor() { }

  ngOnInit() {
  }
}