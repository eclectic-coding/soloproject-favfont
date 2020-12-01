# Chingu Solo Project - Tier 1 - Favorite Fonts

![Tier 1 Gif](./assets/tier1Preview.gif)

## Motivation ##

I built this project as part of the [Chingu Explorer Program](https://chingu.io/) to sharpen my skills with VanillaJS. This project is now part of my Portfolio and will be shown to future interviewers and I continue the job search.  

Live Demo: [Favorite Fonts](https://cs-favfonts-i2rosmmux.vercel.app/)

## Setup 

Clone this repo: `git clone git@github.com:eclectic-coding/soloproject-favfont.git`

To start the server: `yarn start` or `npm run start`

Also, to automatically clean out the `.cache` and `.dist` directories to start fresh: `yarn dev` or `npm run dev`

## Project Parameters ##

- Build using **vanilla** HTML, CSS, and JavaScript. 
- No extra libraries (except Fontawesome for a few icons). 
  - During development I did use Parcel to compile JS, HTML, and SCSS. 
-  The font data is hard coded into a data file, so when I go back and add and external API (i.e. Google Fonts API), most of the needed functions will be in place. 

Even though the font creator is shown in the gif there is no requirement that you include it since it's not available in the Google API.

General instructions for all Pre-Work Projects can also be found in the Chingu Voyage Handbook (URL posted in the #read-me-first channel on Discord).

## ToDo / Features

*Structure*
- [x] Header with minor navigation *(Logo and Catalog/Featured/Articles/About link list)*
- [x] Nav with Major navigation / page-manipulation *(search, custom text, font-size, dark/light mode, grid/list mode, and reset)*
- [x] Main section to contain the font cards
- [x] Font cards which display the Font Name, the sample text, and an add button
- [x] Footer section with your developer information

*Style*
- [x] Sample text in each card should be displayed in the corresponding font
- [x] Buttons/links should be evident *(make sure the cursor changes, etc.)*
- [x] Implement a way to handle overflow from sample text in font cards, as the font size is adjustable

*Functionality*
- [x] Text typed into the custom text (type something) box should immediately change the sample text displayed in each font card
- [x] The sample text should return to the default sample if the input box (type something) no longer has any input *(ex. input == "")*
- [x] Font size chooser should have at least four sizes and should immediately change the sample text font size in each font card
- [x] Implement the clickable 'reset' icon on the far right of the major navigation; it should make the page appear as if the user reloaded the page *(do not actually reload the page)*

*Other*
- [x] Your repo needs to have a robust README.md
- [x] Make sure that there are no errors in the developer console before submitting

**Extras (Not Required)**

- [ ] Include a back-to-top button that allows users to scroll to the top once the top of the page is out of view
- [x] Make your design fully responsive *(small/large/portrait/landscape, etc.)*
- [x] Implement the light/dark mode toggle buttons
- [x] Implement the change display icon so you can flip between a grid and list layout for the font cards

## Example ##

*The functionality shown includes the extra (not required) elements listed above.*
![Tier 1 Gif](./assets/tier1Preview.gif)
