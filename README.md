# gatsby-starter-location-github

The local GitHub directory starter.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Thank you!

A big thank you to [WikiSuite](https://wikisuite.org/) (and Marc Laporte) for their financial support of the RoLLodeQc relaunch. It would never have happened without them!

## Requirements

### GNU/Linux / Unix-like OS

This might work on MacOS and Microsoft Windows but I haven't tested it. Let me know!

### Node.js

You'll need Node.js. The quickest way to install it for your local user in the [n-install bash script](https://github.com/mklement0/n-install).

`git` and `curl` are required for `n-install`.

```
$ curl -L https://git.io/n-install | bash
```

This will install the latest LTS, which is 8.11.3 at the time of this writing.

You should restart your shell before using `node` and `npm` but first, setup your GitHub token so you only have to restart once.

### GitHub account and token

You'll need a GitHub account and a token. GitHub provides some [help on personal access token creation](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).

You can [generate a new token](https://github.com/settings/tokens) and set it in your environment variables with the name `GITHUB_TOKEN` to configure `ghraphql`.

Better to set it up properly in your `.bashrc` file or equivalent. You should now restart your shell for the changes to take effect.

## Install

There are many ways to install.

### Install with git and upgrade

This is currently the preferred method and makes upgrades easier. You won't have to install gatsby globally.

```sh
git clone https://github.com/millette/gatsby-starter-location-github MY-ROLLO
cd MY-ROLLO
git checkout prod
yarn # or npm install if you don't use yarn.
```

It you don't modify the source, you can periodically do:

```sh
git pull
yarn # or npm install
```

If you need to modify the source, you can use your own branch:

```sh
git checkout -b MY-CUSTOM-BRANCH # only once, use whatever branch name
# And once in a while
# edit source code
git commit -a -m"Track your changes"

git checkout prod
git pull
git checkout MY-CUSTOM-BRANCH
git merge prod # might produce conflicts, your turn to handle them
```

### Install with gatsby cli

If you need to make drastic changes not supported by customization, you may prefer this method, although keeping up with the changes will be more difficult.

Make sure that you have the Gatsby CLI program installed globally, we're using Gatsby v2 (in beta):

```sh
npm install --global gatsby-cli@next
```

And run from your CLI:

```sh
gatsby new MY-ROLLO https://github.com/millette/gatsby-starter-location-github#prod
cd MY-ROLLO
```

### Configure

Next, you should create the file `custom/config.js`:

```js
module.exports = {
  baseUrl: 'http://dev.rollodeqc.com', // don't add a slash at the end
  // contactForm: true, // doesn't go anywhere even if enabled
  location: 'Lubumbashi',
  locationSearch: 'lubumbashi', // pass a string for a single location
  // locationSearch: ['montréal', 'québec'], // or an array of strings for multiple locations or synonyms
  themeType: 'bootswatch',
  themeName: 'journal',
  // themeType: 'custom',
  email: 'robin@millette.info'
}
```

`themeType`, if specified, should be one of "bootswatch" or "custom". If you select "bootswatch", then you must also specify `themeName` to be one of the following:

* cerulean
* journal
* minty
* slate
* yeti
* cosmo
* litera
* pulse
* solar
* cyborg
* lumen
* sandstone
* spacelab
* darkly
* lux
* simplex
* superhero
* flatly
* materia
* sketchy
* united

See [Bootswatch](https://bootswatch.com/) for examples.

If you select "custom" for `themeType` then you must create the `custom/scss/` directory with these two files at least:

* \_variables.scss
* \_bootswatch.scss

See [Bootstrap's documentation](https://getbootstrap.com/docs/4.1/getting-started/theming/) for more.

Otherwise, the default Bootstrap theme is used.

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

### clean

Delete public/\* content (except hidden files) and the whole .cache/ directory.

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

## License

AGPL-v3 2018 © [Robin Millette](http://robin.millette.info)
