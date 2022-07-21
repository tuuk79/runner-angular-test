import { Injectable } from '@angular/core';
import { titles } from './data/titles';
import { Title } from './title';

@Injectable()
export class TitlesService {

	databaseEntries: Title[] = [];

	getTitles(): Title[] {
		let mapped: Title[] = [];
		titles.map(title => {
			mapped.push({
				id: title.id,
				name: title.name,
				level_1_title: title.level_1_title,
				full_name: title.full_name,
				external_id: title.external_id,
				season_number: title.season_number,
				episode_number: title.episode_number,
				title_level: title.title_level
			});
		});
		return mapped;
	}

	saveTitle(title: Title): void {
		this.databaseEntries.push(title);
	}
}