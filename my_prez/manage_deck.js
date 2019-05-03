/**
 * A script to manage slides in deck: fill the deck with available requested slides.
 *
 * Note: In reveal.js, a `section` tag correspond to one slide
 */

// 0/ Extract elements from HTML page
// -----------------------------------------------------
// Div containing all slides
var deck = document.getElementById("slides_div");
// Last section
var last_slide = document.getElementById("last_slide");

// other `section` to fill
var other_slides = document.getElementById("my_deck");

// // 1/ Fill last slide
// // ----------------------------------
// // Init a new slide, with same attributes than `last_slide`
// var new_slide = last_slide.cloneNode(true);  // deep copy
//
// // set attributes
// new_slide.setAttribute('id', null);
// // This slide points to `LAST_SLIDE` (see `my_prez/global_config.js`)
// new_slide.setAttribute('data-markdown', LAST_SLIDE);
// // Add a state (for apply script  `my_prez/manage_slides`)
// new_slide.setAttribute('data-state', "somestate");
//
// // Remove the blank
// last_slide.remove();

// 2/ Fill other slides
// ----------------------------------
/**
 * Fill empty section in `slide.html` with `slide_list` files (path of files).
 *
 * @param section {string} html element (`section`) of the page `slide.html`.
 * @param slide_list {Array} List of files (string) used to fill the section `section`.
 *
 * Ex: fillSection(other_slides, slide_list) for filling <section id="my_deck"></section> with
 * <section data-markdown="my_prez/deck/deck1/Page1.md" data-state="somestate"></section>
 * <section data-markdown="my_prez/deck/deck1/Page2.md" data-state="somestate"></section>
 * <section data-markdown="my_prez/deck/deck1/Page3.md" data-state="somestate"></section>
 */
function fillSection(section, slide_list) {

    // Init the result, with same attributes than `section`
    let result = section.cloneNode(true);  // deep copy

    // no id
    result.setAttribute('id', null);

    // fill with `slide_list`
    //-----------------------
    for (let i=0;i < slide_list.length;i++){

        // build `current slide`: ONE SINGLE SLIDE filling `result`
        //--------------------------------------------------
        // init
        let current_slide = document.createElement("section");

        // This slide points to a file (ex: "my_prez/deck/deck1/last_slide.md")
        current_slide.setAttribute('data-markdown', slide_list[i]);

        // Add a state (for apply script  `my_prez/manage_slides`)
        current_slide.setAttribute('data-state', "somestate");

        // Update result
        //--------------
        result.appendChild(current_slide);
        }
    return result
    }

// Fill last slide
//----------------------------------------
var new_last_slide = fillSection(last_slide, [LAST_SLIDE]);

// Remove the blank
last_slide.remove();

// Fill other slide
//----------------------------------------
var new_other_slides = fillSection(other_slides, MY_DECK);
// Remove the blank
other_slides.remove();

// Build deck
//----------------------------------------
// shuffle all slides already in the `slide.html`file
Reveal.shuffle();
console.log("Shuffle slides");
// Add new slide
newslide();

// FUNCTIONS
//-----------------------------------------------------------------------------
function newslide() {
    console.log("Add new slides");
    deck.appendChild(new_other_slides);
    console.log("Add last slide");
    deck.appendChild(new_last_slide);
}


