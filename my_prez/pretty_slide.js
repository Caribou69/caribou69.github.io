/**
 * This module manage the style and the beauty of the slides.
 */

// CHANGE THEME
//-----------------------------------------------------
    // List of available themes (see `reveal.j/css/theme/`)
let AVAILABLE_THEMES = ["beige", "black", "blood", "league", "moon", "night", "serif",
    "simple", "sky", "solarized", "white"];

/**
 * Change the theme of the page with `new_theme`. If `new_theme` is not an element of `AVAILABLE_THEME`
 * noting is done.
 * @param new_theme {string} name of the new theme (element of array AVAILABLE_THEMES).
 */
function changeTheme(new_theme){
    if (AVAILABLE_THEMES.indexOf(new_theme) === -1) {
        console.log("Theme not available")
    } else {
        // Path of the theme in reveal.js
        let theme_path = 'reveal.js/css/theme/' + new_theme + '.css';

        // Modify property of the document
        document.getElementById('theme').setAttribute('href',theme_path);
    }
}

// Add custom event for each theme
//-----------------------------------
// For each theme
for (let i=0;i<AVAILABLE_THEMES.length; i++) {
    // Get an available theme
    let current_theme = AVAILABLE_THEMES[i];
    // ex: "black"

    /** Add an event when a slide have data-state 'theme2`current_theme` (ex: theme2black)
     * Ex: <section data-state="theme2black"></section> -> change the theme to "black"
     */
    Reveal.addEventListener('theme2' + current_theme, function() {
        // Fill fields `span` corresponding to id key_gloups and key_player
        fill_slide();

        // Change theme
        changeTheme(current_theme);
    }, false );
}

