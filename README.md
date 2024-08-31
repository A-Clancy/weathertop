# Station 4.0

# Project Title

This project is submitted in fulfillment of Web Dev II module of SETU HDip in Computer Science

## Description
This is a basic weather station website, heavily based on an in-class playlist app. It allows users to login, create weather stations and submit their own weather readings. 
These readings are stored for each user and may be retrieved by logging in. 
Users may also retrieve a live weather update via an openweather API integration. 

## Getting Started

### Dependencies

* The project was built using glitch. 
* It utilises; 
  *    "body-parser": "^1.20.2",
  *        "cookie-parser": "^1.4.6",
  *        "dayjs": "^1.11.13",
  *        "express": "^4.18.2",
  *        "express-fileupload": "^1.4.0",
  *        "express-handlebars": "^6.0.7",
  *        "fs-extra": "^11.1.0",
  *        "lowdb": "^5.1.0",
  *        "uuid": "^9.0.0",
  *        "axios": "^1.7.5"

### Installing
* the site can be accessed at https://alike-shiny-server-weathertop.glitch.me


## Help
This is basic. There is ample room for improvement, but it works. If there's a problem you could try F5. 

## Authors
Aidan Clancy

## Version History
* 1.0
    * This is the first public realease... It is v4 on the marking rubric. 

## License


## Acknowledgments
readme template from https://gist.githubusercontent.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc/raw/d59043abbb123089ad6602aba571121b71d91d7f/README-Template.md
Starter code from SETU coursework, not publically available. 


## TO-DO list
This is left here as much as a memory aid to remind me of the various steps invovled. 
- [x] Put some nice imagery on the sign up page
- [x] add some code to find the max and min values in each temp, presure etc. Utils - find highest/lowest etc. 
- [x] Figure out how to convert the temp strings to numbers before finding max and min etc. 
- [x] create a partial to display the all time max/min icons in a nice format, use some bulma cards using utils above. https://bulma.io/documentation/components/card/ 
- [x] Fix the display code for the weather icons
- [x] Stop my comments displaying in the rendered version!
- [x] Fix the icon mapping - review previous project. 
- [x] review openweather for details on linking icons
- [x] fix the images in the cards. adjust the layout so the title is on top. 
- [x] Fix the station name in the staion-controller to read the wather code outloook. 
- [X] Tidy up the text a bit
- [x] Run prettify on everything.
- [X] Allow users edit their personal details. 
- [x] being able to rename stations would be good. 
- [x] List the stations in alphabetical order
- [x] Add a timestamp to the weather reports. 
- [X] Update the station controller (or somewhere else???) to take days.js and then format the report timestamps. 
- [X] Download a zipped archive from Gltich
- [X] How do I get users to edit their data?- [ ] Get a better image for the map pin
- [ ] Move the card data to a partial too. Is this too many partials1?
- [ ] then move to current/most recent data
- [ ] I should add data validation to the co-ords when adding a station
- [ ] Sort out the date and time display. 
- [ ]
- [ ] 