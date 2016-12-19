import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  template: `
  <li>
	<a class ="iconButton" (click)="toggle()"> 
  <div class="mainText">
    <i class="material-icons">{{item.icon}}</i>
    <span class="label">{{item.label}}</span>
  </div>
    <div *ngIf="IsExpanded">
      <div *ngIf="item.subs">
        <span class="noBullets" *ngFor="let subitem of item.subs">  		
  			  <app-node [item]="subitem"></app-node>
  		  </span>
      </div>
    </div>
  </a>
 </li>
  `,
  styles: [`
  .label {
      margin-left:20px;
      font-size:1em;
  }
  .label:hover{
    color:blue;
  }
  .mainText {
    cursor: pointer;
  }
  .padding{
    padding: 20px;
  }
  .noBullets {
    list-style-type: none;
    margin:30px;
    padding:30px;
  }`]
})

export class NodeComponent implements OnInit {

@Input() item: any;
IsExpanded: boolean = true;

toggle() {
   this.IsExpanded = !this.IsExpanded;
   console.log(this.IsExpanded+" " + this.item.label); 
  }

  constructor() { }

  ngOnInit() {
  }
}

/**
 * 
 * <span *ngIf="item.subs">
    <span *ngIf="item.subs.length">
      <i class="material-icons">keyboard_arrow_down</i>
    </span>
    </span>
 */