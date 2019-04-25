# Picolal
A small proof of concept to produce a drinking game in js.
 \#DrinkingGame \#Reveal.js

The slides are generated with the [Reveal.js framework](https://github.com/hakimel/reveal.js/).

## Customize an element
For customize an element, please, see the [CONTRIBUTING.md](contributing.md)

## How to begin ?

### Full setup
Because we are using `reveal.js` features (external Markdown), its required that presentations run from a local web 
server. The following instructions will set up such a server as well as all of the development tasks needed to make 
edits to the reveal.js source code.

1. Install [Node.js](http://nodejs.org/) (4.0.0 or later)

1. Clone the repository (make it one single time)
   ```sh
   $ git clone https://github.com/Caribou69/caribou69.github.io.git
   ```
If you are on Windows, you can use GitBash, available at <https://gitforwindows.org/>.

1. Navigate to the repository folder (make it one single time)
   ```sh
   $ cd caribou69.github.io
   ```

1. Install dependencies (make it one single time)
   ```sh
   $ npm install
   ```

1. Serve the presentation and monitor source files for changes
   ```sh
   $ npm start
   ```

1. Open <http://localhost:8000> to view your presentation

   You can change the port by using `npm start -- --port=8001`.

## Details

### Folder Structure

#### img/
All the requested images.

For example, the Favicon is stored into `icon.ico`.

### reveal.js/
The code from `reveal.js` repo.

- **css/** Core styles without which the project does not function
- **js/** Like above but for JavaScript
- **plugin/** Components that have been developed as extensions to reveal.js
- **lib/** All other third party assets (JavaScript, CSS, fonts)

*Note: I have changed `index.html` by `slides.html` in all the code.*