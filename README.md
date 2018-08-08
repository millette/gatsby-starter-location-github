# gatsby-starter-location-github

The local GitHub directory starter.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed, we're using Gatsby v2 (in beta):

```sh
npm install --global gatsby-cli@next
```

And run from your CLI:

```sh
gatsby new MY-ROLLO https://github.com/millette/gatsby-starter-location-github#prod
cd MY-ROLLO
```

Next, you should create the file `custom/config.js`:

```js
module.exports = {
  // contactForm: true, // doesn't go anywhere even if enabled
  location: 'Lubumbashi',
  locationSearch: 'lubumbashi', // pass a string for a single location
  // locationSearch: ['montréal', 'québec'], // or an array of strings for multiple locations or synonyms
  email: 'robin@millette.info'
}
```

Then you can run it with:

```sh
yarn ghraphql:init
yarn dev
```

Change MY-ROLLO for a directory name of your choosing.

## Translations

Create a custom/locales/ directory and add fr.js and en.js files like:

```js
module.exports = {
  title: 'RolloDevs — développeurs d’Iran'
}
```

You can see all available strings in the src/i18n/locales/ files.

## See also

Depends on [ghraphql](https://github.com/millette/ghraphql) to fetch GitHub data.

## npm scripts

Run these with either `npm run SCRIPT` or `yarn SCRIPT`. Replace SCRIPT with any of the following.

### ghraphql:colors

Fetch GitHub language colors and generate its json in the custom/data/languages.json file.

### ghraphql:users

Fetch GitHub users for location in custom/config.js and generate its json in the custom/data/gh-users.json file.

### ghraphql:sparks

Fetch GitHub contributions for users in custom/data/gh-users.json and generate its json in the custom/data/sparks.json file.

### ghraphql:init

Fetch all GitHub data and store in custom/data/ directory.

### dev (or develop)

Start development mode. Sources files are watched and edits are reflected in the browser automatically.

### build

Build static site for production and deployment.

### serve

Serve static site, useful locally.

### deploy

Deploy to GitHub pages, currently broken.

### lint

Run source code through linter (standardJS) - may not succeeed, prettier-standard has priority.

### format

Reformat source with prettier-standard. Don't interrupt it or you may lose file contents. In fact, you shouldn't have to use this manually if you're also using git.

### precommit

prettier-standard runs automatically before committing supported files. You shouln't have to run this manually either.
