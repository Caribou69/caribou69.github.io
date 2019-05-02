/**
 * MODULE managing cookies. Permit to save few piece of informations (arrays, int, ...)
 * between HTML pages.
 *
 * Cookies are dict (key / value)
 */


// MANAGE cookieS (get, set, check)
//----------------------------------------------------

/**
 * Init a cookie (dict key `cname`, value `cvalue`).
 * @param cname: name of the KEY for the created cookies.
 * @param cvalue: Value to save into the cookie.
 *
 * Note: if `cname` already exist, it do NOT erase the `cvalue` !
 */
function setCookie(cname, cvalue) {
    // Parse `cvalue` into a json  (util for lists)
    //--------------------------------
    var json_str = JSON.stringify(cvalue);
    // ex: ['a', 'b'] -> "['a', 'b']"

    // Put into cookie
    //--------------------------------
    // "path=/;"  means that th cookie is saved in the save repo than this script
    // "domain=;" The cookie can be shared between scripts
    document.cookie = cname + "=" + json_str + "; domain=; path=/"
}

/**
 * A function to retrieve value stored in a cookie. Can be multiple.
 * @param cname: Name of the stored var
 * @return {Array}: Value of the corresponding var.
 *
 * Note: This function is not optim read all cookies to retrieve the requested values (we assume
 * the cookie is not a very large dict).
 *
 *  If the cookie do not exist, return ""
 */
function getCookie(cname) {

    // 0: INIT VARS
    var name = cname + "=";
    var results = [];

    // 1 : read entire cookie
    var decodedCookie = decodeURIComponent(document.cookie); // str
    var ca = decodedCookie.split(';'); // idem : array of saved cookies
    // " nb_player=2", " player_list="['a','b']""

    // For each KEY to read:
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        //c = " player_list="['a','b']""

        // remove multple spaces
         while (c.charAt(0) == ' ') {
            // If current char is a space: rm it (substring(1))
            c = c.substring(1);
        }
        //c = "player_list="['a','b']""

        // If it's the requested name (.indexOf(name)==0)...
        if (c.indexOf(name) == 0) {

            // Add it to result
            //---------------------
            // content of the cookie (as JSON)
            var json_content = c.substring(name.length, c.length);
            //"['a','b']""

            // Read the content
            var content = JSON.parse(json_content);
            // ['a', 'b']

            // Update result
            results.push(content)
        }
    }
    // `results` is an array of 1 element (content of the cookie)
    return results[0];
}


/**
 * Check if a cookie exists, and print *message* into console if ok.
 * @param name: name of the cookie to check
 * @param message: Message to display into console
 */
function checkCookie(name, message = "cookie found : ") {
    var username = getCookie(name);
    if (username != "") {
        console.log(message + name + " : " + username);
    }
}


// Test
//------------
// setCookie("username","Jules")
// setCookie("username", "Bernard") 

// // Display all cookies of type "username="
//alert("Set of all usernames : " + getCookie("username"))

//checkCookie()
//getCookie("username")
