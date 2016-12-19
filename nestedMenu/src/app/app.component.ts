import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
		{
			label: 'Editors',
			icon:'create',
			subs: [
				{
					label: 'CKEditor',
					icon:''
				}]
		},
		{
			label: 'Charts',
			icon:'poll',
			subs: [
				{
					label: 'chartist.Js',
					icon:''
				}]
		},
		{
			label: 'UI Features',
			icon:'palette',
			subs: [
				{
					label: 'Typography',
					icon:''
				},
				{
					label: 'Buttons',
					icon:''
				},
				{
					label: 'Shop',
					icon:'',
					subs: [
						{
							label: 'Reply',
							icon:''
						},
						{
							label: 'Save',
							icon:''
						}],
				},
				{
					label: 'Grid',
					icon:''
				}]
		}
	];
}
