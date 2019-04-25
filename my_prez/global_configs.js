/**
 * Script containing hard coded vars
 *
 */

// Global configs: (you can touch)
// ---------------------------------------------------------
// Min / max sip
const MAX_GLOUPS = 5;
const MIN_GLOUPS = 1;

// Allow debug mode:
// if true -> ESCAPE button is allowed to access to overview mode
const DEBUG = false;

// Hyper-parameters
var LIST_OF_PLAYER=["p1", "p2"];

// Last slide to add AFTER shuffle
const LAST_SLIDE="my_prez/deck/deck1/last_slide.md";

// Internal configs: (do not touch)
// ---------------------------------------------------------
// Key corresponding to an int
const key_gloups = 'GLOUPS';
// key corresponding to a player name
const key_player = 'PLAYER';

// true: generate fix number of sip (10) / player name (first player)
const FIX_GLOUPS=DEBUG;

