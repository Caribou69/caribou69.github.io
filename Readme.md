# Picolal
A small proof of concept to produce a drinking game in js.
 \#DrinkingGame \#Reveal.js

The slides are generated with the [Reveal.js framework](https://github.com/hakimel/reveal.js/).

## Customize an element
For customize an element (or details about files / scripts), please, see the [CONTRIBUTING.md](contributing.md)

## Specifications
Specifications are listed in file [Specifications.md](Specifications.md). For a french version, please, see
the [ChaierDesCharges.txt](doc/fr/CahierDesCharges.txt).

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
For technical details about the project, please, see the [CONTRIBUTING.md](contributing.md).
