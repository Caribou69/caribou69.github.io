# Contributing

## Technical (global) presentation
This project uses `reveal.js` for building and managing a *deck* of *slides*. `reveal.js` needs `npm`, and 
a lot of library (i just paste the code). 

My contribution is contained into dir `my_prez`, and in html scripts (choose a player, ...). Indeed, I don't
customize the building part (with npm / grunt, ...). I just use `reveal.js` as a tool.

## I just want to add some slide ... 
To add some slides to your *deck*, you have to edit a `.md` (markdown) file in `my_prez/deck/deck1/`.

* Fill it as you want.
* Add the path of your file to variable `MY_DECK` in `my_prez/global_config.js`.

For example, for a file called `MyPage.md`, add `my_prez/deck/deck1/MyPage.md` to the list.

**Add a random player name**
To add a random player name (this name is randomly selected in the list of players), 
add `<span name="PLAYER"></span>`.

**Add a random number of shots**
To add a random number of shots, add `<span name='GLOUPS'></span>`.

Note that the min / max number of shots is managed into `my_prez/global_config.js`.

## Relevant files

### HTML pages
Main page is [index.html](index.html). It's CSS style is contained into
[index_style.css](index_style.css).

The page managing *slides* (using `reveal.js`) is [slides.html](slides.html).

### JS scipts
These scripts are stored into dir `my_prez/`:
* `global_config.js`: module containing some variables initialized (`DEBUG`,...)
* `manage_deck.js`: module managing the building of a *deck*

### Other JS script **do not touch**
These scripts are stored into dir `my_prez/`:
* `cookie.js`: module managing cookies (share vars between pages): get, set, check
* `manage_slides.js`: A script managing function for fill slides with player_names / nb shots, ...

## Customize favicon
The favicon is the little image shown in your browser tab. It is stored in `img/icon.ico`.

## Folder Structure
This section present details about dirs in the project.

#### img/
All the requested images.

For example, the Favicon is stored into `icon.ico`.

### doc
Some documentation about the project, especially dir `fr/`, containing french doc.

### my_prez
A dir containing all custom scripts (`.js` files), and the `decks` (contains *slides* as markdown file
 : 1 file per slide).
 
### reveal.js/ **Do not touch to this dir.**
The code from `reveal.js` repo.

- **css/** Core styles without which the project does not function
- **js/** Like above but for JavaScript
- **plugin/** Components that have been developed as extensions to reveal.js
- **lib/** All other third party assets (JavaScript, CSS, fonts)

*Note: I have changed `index.html` by `slides.html` in all the code.*

### node_modules (if you launch `npm install`) **Do not touch to this dir.**
All required libs (packages for `reveal.js`).

### Other files
Files [.travis.yml](.travis.yml), [bowser.json](bower.json), [gruntfile.js](gruntfile.js), 
[package.json](package.json), [git.exe.stackdump](git.exe.stackdump),
[package-lock.json](package-lock.json), [git.exe.stackdump](git.exe.stackdump),
[package-lock.json](package-lock.json) manage the build and launching of the `reveal.js` part, 
when you enter `npm install`, and `npm start`.

**Do not touch these files.**