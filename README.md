# DmgAngularTest

This is meant to be a short exercise to illustrate your familiarity with Angular. Fork this repo and follow the instructions you see when serving the app locally.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Solution and Notes

I was able to get through the requirements, however wasn't able to completely get the autocomplete panel showing exactly the way I wanted.
You'll notice I close the panel on keyup event.  It is not the best user experience, but it still addresses the requirement.

A user is able to bring up the autocomplete panel and filter as they type.  Clicking on an autocomplete panel entry populates it in the text area for staging.
And finally, if the user wants to save the title, they can do so by clicking the "SAVE" button.  I added a small section to mimic database entries being saved as a result
of clicking the "SAVE" button.