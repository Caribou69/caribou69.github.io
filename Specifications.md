# Specifications

## Work in progress
This doc present the work done, and the TODOs.

*Note: The website was initially dedicated to french persons. (A traducing work have to be done later.)*
*Note 2: I tried to make all code / docs in en. Only the website produced is in fr.(A traducing work have to be done 
later.)* 

---

## TODO:

### index.html
* add feature: impossible to have two same names
* add prettier css to index.html

*Advenced features*
* add img to each 'chip'
* add RANDOM img to each 'chip'


### level
* add **level** page (permiting to choose the difficulty level)
* add a difficulty level

### slides
* build 15 slides
* build the final slide

*Advenced features*
* select a fixed number of slides, and add it dynamically to an empty presentation


### Target:
Making 3 consecutive pages available on the web (called **index** **level** and **slides**.)

#### **index** page
A form to fill, with some criterion to refuse form (ex: fields not filled)
* 2 fields min
* can extend the number of fields clicking on "add"
* when you click on "add", add a profile card of the player (just fill it with name + random img
+ random decr) -> see [this link](https://freefrontend.com/css-cards/)
* can remove field clicking on "cross" in the contact card
* A button to accept form
* A check to verify if at least 2 players AND if all fields contains different entry
* When the form is OK, clicking on the button leads to change page to next page

#### **level** page
* Choose the difficulty level between 3 levels (pyjama-party, medium, hard-core)
* divide the page into 3 gif / img, pointing the mouse on the image action the gif.
* You can help with [this code](http://jsfiddle.net/xnLn6s5o/)

#### **slides** page -> OK
A **slide like** page containing an image, a text.
* The text contains one entry from the previous filled form (the entry is choose randomly)
* when clicking, go on next page

## Features to add
### JS code
* select a fixed number of slides, and add it dynamically to an empty presentation
* add characteristics to each slide (game, action,...)
* add a lot of slides (1 per dir ?)
* write a french doc to learn how adding new slides
* create new deck, and select random deck when launching
