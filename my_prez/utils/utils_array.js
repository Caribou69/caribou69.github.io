/**
 * A module to manipulate Arrays
*/



// FUNCTION
//-----------------------------------------------------------------------------
/**
 * Select a random (shuffled) sub-array of input list `arr`, with `size` elements.
 *
 * @param arr {Array} array to sample
 * @param size {number} number of element of the result
 * @return {Array} Random selection of `size` element from `arr`
 *
 * Note: it's an adaptation of the "Fisher-Yates shuffle" algorithm.
 */
function getRandomSubarray(arr, size) {
// From https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
    // Init vars
    let shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;

    // Fill result
    while (i-- > min) {
        // Random selection
        index = Math.floor((i + 1) * Math.random());

        // shuffled[index] <-> shuffled[i]
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

console.log(getRandomSubarray(l, 4));
