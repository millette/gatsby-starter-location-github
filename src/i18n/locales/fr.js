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
  title: 'RolloDevs — développeurs d’Iran',
  subtitle: 'Votre source de développeurs locaux',

  'index.available.off': 'Disponible? Peu importe',
  'index.available.on': 'Disponible? OUI!',
  'index.order': 'Tri',
  'index.order.joined': 'Date d’inscription',
  'index.order.name': 'Nom (ou login)',
  'index.order.nRepos': 'Nombre de dépots',
  'index.order.reverse': 'Inverser l’ordre',
  'index.allLanguages': 'Tous',
  'index.search.name': 'Nom',
  'index.search.location': 'Lieu',
  'index.more': 'Afficher plus de résultats',
  'index.noResults': 'Aucun résultat.',
  'index.resultsSummary': `{nDisplayed, plural,
    =0 {Aucun utilisateur affiché}
    one {Un utilisateur affiché}
    other {# utilisateur affichés}
  } sur {nSelected, plural,
    =0 {}
    one {un de sélectionné,}
    other {# sélectionnés,}
  } {nTotal, number} en tout`,

  'contact.emailInput': 'Adresse email',
  'contact.emailHelp': 'Nous ne partagerons jamais votre adresse à un tier.',
  'contact.subjectInput': 'Sujet',
  'contact.commentInput': 'Commentaire',
  'contact.commentHelp':
    'N’oubliez pas d’inscrire votre adresse email si vous attendez une réponse.',
  'contact.submitForm': 'Envoyer',
  'contact.col1.html': `
<p>
  N’hésitez pas à nous contacter si vous avez des questions ou ou des
  suggestions.
</p>
`,
  'contact.col2.html': `
<p>
  Utilisez notre formulaire ou envoyez nous un email:<br />
  <a href='mailto:{email}'>{email}</a>
</p>
`,
  'contact.col2b.html': `
<p>
  Envoyez nous un email:<br />
  <a href='mailto:{email}'>{email}</a>
</p>
`,
  'contact.col3': 'Pour contacter un développeur, consultez notre {directory}',
  'contact.directory': 'répertoire',
  'contact.title': 'Contactez nous',

  'about.title': 'À propos',
  'about.col1.html': `
<p>Francais bla bla.</p>
<p>Et deuxième paragraphe.</p>
`,
  'about.front': 'Allez au répertoire',
  'about.contact': 'Des questions?',
  'about.col2.html': `
<p>Français bla bla pour la colonne 2.</p>
<p>Et deuxième paragraphe.</p>
<ul>
  <li>Même</li>
  <li>une</li>
  <li>liste</li>
</ul>
`,

  '404.title': 'PAGE NON TROUVÉE',
  '404.text':
    'Vous avez trouvé un chemin qui ne mène nul part… Quelle tristesse.',

  'nav.contact': 'Contact',
  'nav.about': 'À propos',
  'nav.current': '(actuelle)',
  'nav.switchLanguage': 'Changer la langue',

  'directory.location': 'Lieu',
  'directory.website': 'Site web',
  'directory.email': 'Courriel',
  'directory.created': 'Créé',
  'directory.company': 'Compagnie',

  'directory.stars.label': 'Étoiles',
  'directory.repos.label': 'Dépots',
  'directory.repos.value': `{nStars, plural,
    =0 {aucun dépot}
    one {un dépot}
    other {# dépots}
  }`,
  'directory.languages': 'Langages',
  'directory.available': 'Disponible pour travailler',

  'jumbotron.text':
    '[FR] Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.'
}
