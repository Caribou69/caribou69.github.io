/**
 * A script to manage slides in deck
 *
 * Note: In reveal.js, a `section` tag correspond to one slide
 */

// Extract elements from HTML page
// ----------------------------------
// Div containing all slides
var deck = document.getElementById("slides_div");
// Last section
var blank_slide = document.getElementById("blank");

// Create new slide
// ----------------------------------
// Init a new slide, with same attributes than `blank_slide`
var new_slide = blank_slide.cloneNode(true);  // deep copy
new_slide.setAttribute('id', null);
// This slide points to `LAST_SLIDE` (see `my_prez/global_config.js`)
new_slide.setAttribute('data-markdown', LAST_SLIDE);
// Add a state (for apply script  `my_prez/manage_slides`)
new_slide.setAttribute('data-state', "somestate");

// Remove the blank
blank_slide.remove();

// Build deck
//----------------------------------------
console.log("Begin shuffle");
// add some slides shuffled
Reveal.shuffle();
console.log("End shuffle");
// Add new slide
newslide();

// FUNCTIONS
//-----------------------------------------------------------------------------
function newslide() {
    console.log("Add new slide");
    deck.appendChild(new_slide);
}


