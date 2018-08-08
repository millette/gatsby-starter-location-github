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
gatsby new gatsby-starter-location-github https://github.com/millette/gatsby-starter-location-github#prod
```

Then you can run it by:

```sh
cd gatsby-starter-location-github
yarn ghraphql:init
yarn dev
```

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

### "precommit": "lint-staged"

prettier-standard runs automatically before committing supported files.
