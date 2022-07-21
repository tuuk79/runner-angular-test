import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { TitlesService } from './app.service';
import { Title } from './title';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
	pageTitle = 'by Sony Pictures Entertainment';
	title = 'the at-home Runner typeahead exercise';
	requirements = [
		`We have supplied sample json in the data directory to return title suggestions for a typeahead input component you'll create.`,
		'Please build a client that returns the sample json, as you would any client interacting with a json API.',
		'When the user types 3 or more characters into the input, it should show an Angular Material typeahead/autocomplete dropdown.',
		`When the user makes a selection from the dropdown, a new element below the input should show the selection's full name. Feel free to be creative with your styles.`,
		'The selected titles should be removable.',
		'This mimics a form element in our application where users assign title metadata to assets, so if you would like to build something that replicates a form submission, feel free to come up with your own solution to how it "saves" the data.'
	];

	@ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;
	myAutoComplete = new FormControl('');
	options: Title[] | undefined;
	filteredOptions: Observable<Title[]> | undefined;
	selected: Title | undefined;
	dbEntries: Title[] | undefined;

	constructor(private svc: TitlesService) { }

	ngOnInit(): void {
		this.options = this.svc.getTitles();
		this.filteredOptions = this.myAutoComplete.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value || '')),
		);
	}

	ngAfterViewInit(): void {
		this.autocomplete.closePanel();
	}

	onSubmit(): void {
		this.svc.saveTitle(this.selected!);
		this.dbEntries = this.svc.databaseEntries;
	}

	showPanel($userinput: string): void {
		if ($userinput.length >= 3) {
			this.autocomplete.openPanel();
		} else {
			this.autocomplete.closePanel();
		}
	}

	onOptionSelected($selectedTitle: string): void {
		this.selected = this.options!.filter(option => option.name == $selectedTitle)[0];
	}

	private _filter(value: string): Title[] {
		const filterValue = value.toLowerCase();
		return this.options!.filter(option => option.name!.toLowerCase().includes(filterValue));
	}
}
