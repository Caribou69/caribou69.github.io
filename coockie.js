//-------------------------------------------------------------------------------------------------
// Ce script permet d'enregistrer des coockies (donc des infos !!!) d'une page html à l'autre ! 
//-------------------------------------------------------------------------------------------------
// les coockies sont des objets se comportant comme des dictionnaires (clées : values)


// Gestion des coockies
//----------------------------------------------------


// Fonction pour initialiser (set) un coockie
function setCookie(cname, cvalue) {
    // "path=/;" signifie que le coockie est enregistré ds le même répertoire que ce script
    // "domain=;" signifie que le coockie pourra être partagé à d'autres scripts !
    document.cookie = cname + "=" + cvalue + "; domain=; path=/"
}
// Attention : si cname existe déjà, n'écrase PAS la valeur !



// Fonction qui retourne la valeur spacifique (get) d'un coockie (peut être multiple !!!!)
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie); // chaine de caratere
    var ca = decodedCookie.split(';'); // idem : tableau des coockies enregistrés

    var resultat = [];

    for(var i = 0; i <ca.length; i++) { // parcours des noms
        var c = ca[i];
         while (c.charAt(0) == ' ') {
            // si le caractère courant est un espace, on le retire (substring(1))
            c = c.substring(1);
        }
        // si c'est le nom qu'on cherche (.indexOf(name)==0)
        if (c.indexOf(name) == 0) {
            // ajouter (.push) au resultat le nom
            resultat.push(c.substring(name.length, c.length));
        }
    }
    // si le coockie n'existe pas : la fonction retourne la liste vide ""
    return resultat;
}



// fonction pour vérifier qu'un coockie existe (check) et affiche *message* si le coockie existe
function checkCookie(name, message = "Coockie trouvé : ") {
    var username = getCookie(name);
    if (username != "") {
        alert(message + username);
    // } else {
    //     username = prompt("Please enter your name:", "");
    //     if (username != "" && username != null) {
    //         setCookie("username", username);
    //     }
    }
}


// Test
//------------
// setCookie("username","Jules")
// setCookie("username", "Bernard") 

// // affiche tous les coockies de type "username="
//alert("Ensemble des usernames : " + getCookie("username"))

//checkCookie()
//getCookie("username")
