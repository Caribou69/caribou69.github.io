/**
 * Module for manage the slides: fill them, etc...
* Module `global_config` have to be launch`
 */

// FUNCTIONS
// -------------------------------------------------------------------------------
/**
 *  Get a random number of sip between min / max values (included)
 *
 * @param {number} min: the minimal nb of shots to drink
 * @param {number} max: maximal number (included)
 * @return {number} a random number between min and max
 */
function randomIntFromInterval(min=MIN_GLOUPS,max=MAX_GLOUPS)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

/** Get a random player in the list of available player.
 *
 * @param player_list {Array} list of players
 * @returns {string} One element of the input list
 */
// TODO: add an 'except' input, to avoid same output twice
function getRandomPlayer(player_list=LIST_OF_PLAYER){
    return player_list[Math.floor(Math.random()*player_list.length)];
}

/**
 * Replace html span containing name `key` in a page, by a call of function `replace_by`
 * (call function WITHOUT ANY ARG : `replace_by()`
 *
 * @param key {string} key name of span to replace
 * @param replace_by {function} function to apply
 */
function replace_span(key, replace_by) {
    // get span containing NAME=`key` (list)
    var span_to_change=document.getElementsByName(key);

    // for each element, replace by `replace_by`
    for (var i = 0; i<span_to_change.length; i++) {
        span_to_change[i].textContent=replace_by();
    }
}

/**
 * Wrapper: fill a slide, replacing
 * `key_gloups` by `randomIntFromInterval()`
 * `key_player` by `getRandomPlayer()`
 *
 * Note: If `FIX_GLOUPS`, replace by fix values (10 and first player)
 */
function fill_slide() {
    // If you requested fix values
    if (FIX_GLOUPS) {
        // replace span containing keyword 'GLOUPS'
        replace_span(key_gloups, "10");

        // replace span containing keyword 'PLAYER'
        replace_span(key_player, LIST_OF_PLAYER[0]);

    } else {
        // replace span containing keyword 'GLOUPS'
        replace_span(key_gloups, randomIntFromInterval);

        // replace span containing keyword 'PLAYER'
        replace_span(key_player, getRandomPlayer);
    }
}


// EVENTS
// -------------------------------------------------------------------------------
// Function to activate when slide 'somestate' is shown
// Note: when you go back on the slide, a new random is generated !!
Reveal.addEventListener( 'somestate', function() {
    // Fill fields `span` corresponding to id key_gloups and key_player
    fill_slide()
}, false );