# Picolal
A small proof of concept to produce a drinking game in js.
This project was freely inspired by this [funny game](https://github.com/tiaanduplessis/dronk-expo).



# Work in progress
This doc present the work done, and the TODOs.

*Note: The website was initially dedicated to french persons. (A traducing work have to be done later.)*
*Note 2: I tried to make all code / docs in en. Only the website produced is in fr.(A traducing work have to be done 
later.)* 

## Work Done


## TODO:

* Fork code form [this repo](https://github.com/tiaanduplessis/dronk-expo) (written in React.js)


### Target:
Making 2 pages linked. Available from web (called **index** and **page_1**.

#### **index** page
A form to fill, with some criterion to refuse form (ex: fields not filled)
* 2 fields min
* can extend the number of fields clicking on "add"
* can remove field clicking on "rm" (2 fields min)
* A button to accept form
* A check to verify if all fields are filled AND if all fields contains different entry
* When the form is OK, clicking on the button leads to change page to **page_1**

#### **page_1** page
A **slide like** page containing an image, a text.
* The text contains one entry from the previous filled form (the entry is choose randomly)
* when clicking, go on next page