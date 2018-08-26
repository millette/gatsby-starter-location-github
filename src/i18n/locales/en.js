/* Don’t edit this file.
 * See the custom/locales/ directory
 * and create the appropriate en.js and fr.js files.
 * Strings found in custom/locales/ files will override default strings.
 *
 * N’éditez pas ce fichier.
 * Voir le répertoire custom/locales/
 * pour y créer les fichiers en.js et fr.js appropriés.
 * Les chaines trouvées dans les fichiers de custom/locales/
 * remplaceront les chaines par défaut.
 */
module.exports = {
  title: 'RolloDevs',
  subtitle: 'Your locally sourced developper directory',
  'ads.sponsor': 'About the ads',
  'ads.why': '"Note that the ads help maintain the website." {more}',
  'ads.toggle.show': 'Show ads',
  'ads.toggle.hide': 'Ads (hide)',
  'ads.rollodevs':
    'Looking to hire the perfect candidate? {name} is the place to start!',
  'ads.wikisuite':
    '{name} is the most comprehensive and integrated Free / Libre / Open Source enterprise software suite ever developed.',
  'ads.andyou.title': 'And you?',
  'ads.andyou.text': 'Contact us to find out more about our offer.',
  'footer.generated': 'Generated',
  'footer.license': 'License',
  'footer.buildTime': 'Built {buildTime}',
  'radios.available': 'Availability',
  'radios.dontCare': 'Doesn’t matter',
  'radios.yes': 'Yes',
  'radios.no': 'No',
  'radios.minDepots': 'Mininum one repository',
  'radios.minContribs': 'Mininum one contribution',
  'radios.web': 'Web site',
  'radios.email': 'Email',
  'radios.company': 'Company',
  'index.search': 'Search',
  'index.progLanguage': 'Programming language',
  'index.license': 'License',
  'index.keyword': 'Keyword',
  'index.available.off': 'Available? Doesn’t matter',
  'index.available.on': 'Available? YES!',
  'index.order': 'Order',
  'index.order.joined': 'Registration date',
  'index.order.name': 'Name (or login)',
  'index.order.nRepos': 'Number of repositories',
  'index.order.contribs': 'Recent contributions',
  'index.order.reverse': 'Reverse',
  'index.allLanguages': 'All',
  'index.search.name': 'Name',
  'index.search.location': 'Location',
  'index.more': 'Show more results',
  'index.noResults': 'No results found.',
  'index.resultsSummary': `{nDisplayed, plural,
    =0 {No user}
    one {One user}
    other {# users}
  } displayed from
  {nSelected, plural,
    =0 {}
    one {one selected,}
    other {# selected,}
  }
  {nTotal, number} in all
  {location, select,
    UNDEFINED {}
    other { - {location}}
  }`,
  'contact.emailInput': 'Email address',
  'contact.emailHelp': 'We’ll never share your email with anyone else.',
  'contact.subjectInput': 'Subject',
  'contact.commentInput': 'Comment',
  'contact.commentHelp':
    'Don’t forget to fill in your email address if you expect a response.',
  'contact.submitForm': 'Send',
  'contact.col1.html':
    '<p>Don’t hesitate to contact us if you have any questions or suggestions.</p>',
  'contact.col2.html': `<p>
    Use our contact form or send us an email:<br />
    <a href='mailto:{email}'>{email}</a>
  </p>`,
  'contact.col2b.html': `<p>
    Send us an email <a href='mailto:{email}'>{email}</a> or call Robin Millette at 514-394-7877.
  </p>`,
  'contact.col3': 'To contact a developer, consult our {directory}',
  'contact.directory': 'directory',
  'contact.title': 'Contact us',
  'about.title': 'About us',
  'about.col1.html': `
<p>
The directory data comes from <code>GitHub</code> via a location based search.
It’s updated many times each week to generate a new static website with <code>Gatsby</code>.
</p>
<p>
The <code>Gatsby</code> Starter is available as open source software
and can easily be adapted to other locations and languages.
It’s a good way to discover <code>Gatsby</code>, <code>React</code> and <code>GraphQL</code>
if you already know <code>JavaScript</code>.
</p>
<p>Contact us if you would like to sponsor the site.</p>
`,
  'about.front': 'The directory',
  'about.contact': 'Questions?',
  'about.col2.html': `
<p>
The site is maintained and developed by Robin Millette, a Montréal programmer
and long time supporter of Free and Open Source Software.
</p>
<p>
Don’t hesite to contact me directly or through the <code>GitHub</code> issues
if you wish to contribute or have a comment or suggestion to improve the site.
</p>
<h4>Coming features</h4>
<ul>
  <li>Longer ads section (job offers, etc.)</li>
  <li>User accounts to manage your profile</li>
  <li>Detailed user profiles</li>
  <li>Community pages (<code>Python</code>, <code>JavaScript</code>, <code>Linux</code>, etc.)</li>
  <li>Global statistics and charts</li>
  <li>And more!</li>
</ul>
`,
  '404.title': 'NOT FOUND',
  '404.text': 'You just hit a route that doesn’t exist… the sadness.',
  'nav.sponsor': 'Sponsoring',
  'nav.contact': 'Contact',
  'nav.about': 'About',
  'nav.current': '(current)',
  'nav.switchLanguage': 'Switch language',
  'directory.title': 'Directory',
  'directory.keywords': 'Keywords',
  'directory.licenses': 'Licenses',
  'directory.sum2.label': '20 weeks',
  'directory.sum2.value': `{sum2, plural,
    =0 {zero contributions}
    one {one contribution}
    other {# contributions}
  }`,
  'directory.lastContribDate': 'Most recents',
  'directory.location': 'Location',
  'directory.website': 'Website',
  'directory.email': 'Email',
  'directory.created': 'Created',
  'directory.company': 'Company',
  'directory.stars.label': 'Stars',
  'directory.repos.label': 'Repositories',
  'directory.repos.value': `{nStars, plural,
    =0 {zero repositories}
    one {one repository}
    other {# repositories}
  }`,
  'directory.languages': 'Languages',
  'directory.available': 'Available for hire',

  'sponsor.title': 'Sponsoring',
  'sponsor.col1.html': `
<p class='lead'>
Would you be interested in seeing your company logo on the directory
and support the long term development of the site and its community?
Just in time for the
<a target='_blank' rel='noopener noreferrer' href='https://2018.sqil.info/en/'>
  Québec Free Software Week
</a> :-)
</p>
<p>
Since 2015, the number of developpers in Québec has more than double.
A new RoLLodeQc was necessary. Now that it’s based on Gatsby, it’s
easier to update and adapt to other locations.
</p>
<p>
In order to support the development and maintenance of the directory,
the site will be showing small ads in rotation and will have a section
for longer ads such as job offers and more.
</p>
<p>
Make sure you mention if you prefer the small or longer ad when you contact us
so we can put it online as soon as possible.
</p>
`,
  'sponsor.col2.title': 'Available offers',
  'sponsor.col2.deadline': 'until the end of 2018',

  'sponsor.col2.html': `
<ul>
  <li><b>250$ for 3 months:</b> Longer ads; job offers, etc.</li>
  <li><b>100$ for 3 months:</b> Logo, name and a short message (max 15 words); 3 spaces in rotation <b><sup>*</sup></b> on the front page</li>
  <li><b>500$ per month:</b> Permanent display on the front page <sup>*</sup></b> <i>(instead of in rotation</i>); only 1 available each month</li>
</ul>
`,

  'jumbotron.header.show': 'More info',
  'jumbotron.header.hide': 'Hide header',
  'jumbotron.more': 'Find out more',
  'jumbotron.text': `Welcome to the directory of programmers from your region (with a GitHub account).
Its filtering and ordering tools enable you to quickly find the person you are looking for.`
}
