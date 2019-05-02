/**
 * Script containing hard coded vars
 *
 */

// Global configs: (you can touch)
// ---------------------------------------------------------
// Min / max sip
const MAX_GLOUPS = 5;
const MIN_GLOUPS = 1;

// list of pretty png icon available (in `img/`)
const LIST_OF_ICON=['beer.png', 'cocktail.png', 'cocktail2.png', 'wineBottle.png', "wineCup.png"];

// Last slide to add AFTER shuffle
const LAST_SLIDE="my_prez/deck/deck1/last_slide.md";

// Allow debug mode
//-------------------
// if true -> ESCAPE button is allowed to access to overview mode
const DEBUG = false;

// Internal configs: (do not touch)
// ---------------------------------------------------------
// Key corresponding to an int
const key_gloups = 'GLOUPS';
// key corresponding to a player name
const key_player = 'PLAYER';

// true: generate fix number of sip (10) / player name (first player)
const FIX_GLOUPS=DEBUG;
