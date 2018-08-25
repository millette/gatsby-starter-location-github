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
  subtitle: 'Votre source de développeurs locaux',
  'ads.sponsor': 'À propos des annonces',
  'ads.why':
    '« Notez que les annonces contribuent au maintien du site.» {more}',
  'ads.toggle.show': 'Afficher les annonces',
  'ads.toggle.hide': 'Annonces (cacher)',
  'ads.rollodevs':
    'Vous cherchez le candidat parfait? {name} c’est l’endroit où commencer!',
  'ads.wikisuite':
    '{name} est la suite intégrée de logiciels libres la plus complète à avoir été développée jusqu’à ce jour.',
  'ads.andyou.title': 'Et vous?',
  'ads.andyou.text': 'Contactez-nous pour connaitre nos forfaits.',
  'footer.generated': 'Génération',
  'footer.license': 'Licence',
  'footer.buildTime': 'Construit {buildTime}',
  'radios.available': 'Disponibilité',
  'radios.dontCare': 'Peu importe',
  'radios.yes': 'Oui',
  'radios.no': 'Non',
  'radios.minDepots': 'Mininum un dépot',
  'radios.minContribs': 'Mininum une contribution',
  'radios.web': 'Site web',
  'radios.email': 'Courriel',
  'radios.company': 'Compagnie',
  'index.search': 'Cherchez',
  'index.progLanguage': 'Langage de programmation',
  'index.license': 'Licence',
  'index.keyword': 'Mot-clé',
  'index.available.off': 'Disponible? Peu importe',
  'index.available.on': 'Disponible? OUI!',
  'index.order': 'Tri',
  'index.order.joined': 'Date d’inscription',
  'index.order.name': 'Nom (ou login)',
  'index.order.nRepos': 'Nombre de dépots',
  'index.order.contribs': 'Contributions récentes',
  'index.order.reverse': 'Inverser',
  'index.allLanguages': 'Tous',
  'index.search.name': 'Nom',
  'index.search.location': 'Lieu',
  'index.more': 'Afficher plus de résultats',
  'index.noResults': 'Aucun résultat.',
  'index.resultsSummary': `{nDisplayed, plural,
    =0 {Aucun utilisateur affiché}
    one {Un utilisateur affiché}
    other {# utilisateurs affichés}
  } sur {nSelected, plural,
    =0 {}
    one {un de sélectionné,}
    other {# sélectionnés,}
  } {nTotal, number} en tout
  {location, select,
    UNDEFINED {}
    other { - {location}}
  }`,
  'contact.emailInput': 'Adresse courriel',
  'contact.emailHelp':
    'Nous ne partagerons jamais votre adresse courriel à un tiers.',
  'contact.subjectInput': 'Sujet',
  'contact.commentInput': 'Commentaire',
  'contact.commentHelp':
    'N’oubliez pas d’inscrire votre adresse courriel si vous attendez une réponse.',
  'contact.submitForm': 'Envoyer',
  'contact.col1.html':
    '<p>N’hésitez pas à nous contacter si vous avez des questions ou des suggestions.</p>',
  'contact.col2.html': `<p>
    Utilisez notre formulaire ou envoyez-nous un courriel:<br />
    <a href='mailto:{email}'>{email}</a>
  </p>`,
  'contact.col2b.html': `<p>
    Envoyez-nous un courriel <a href='mailto:{email}'>{email}</a> ou téléphonez Robin Millette au 514-394-7877.
  </p>`,
  'contact.col3': 'Pour contacter un développeur, consultez notre {directory}',
  'contact.directory': 'répertoire',
  'contact.title': 'Contactez-nous',
  'about.title': 'À propos',
  'about.col1.html': `<p>Français bla bla.</p>
  <p>Et deuxième paragraphe.</p>`,
  'about.front': 'Allez au répertoire',
  'about.contact': 'Des questions?',
  'about.col2.html': `<p>Français bla bla pour la colonne 2.</p>
  <p>Et deuxième paragraphe.</p>
  <ul>
    <li>Même</li>
    <li>une</li>
    <li>liste</li>
  </ul>`,
  '404.title': 'PAGE NON TROUVÉE',
  '404.text':
    'Vous avez trouvé un chemin qui ne mène nul part… Quelle tristesse.',
  'nav.sponsor': 'Commanditer',
  'nav.contact': 'Contact',
  'nav.about': 'À propos',
  'nav.current': '(actuelle)',
  'nav.switchLanguage': 'Changer la langue',
  'directory.title': 'Répertoire',
  'directory.keywords': 'Mots-clés',
  'directory.licenses': 'Licences',
  'directory.sum2.label': '20 semaines',
  'directory.sum2.value': `{sum2, plural,
    =0 {aucune contribution}
    one {une contribution}
    other {# contributions}
  }`,
  'directory.lastContribDate': 'Plus récentes',
  'directory.location': 'Lieu',
  'directory.website': 'Site web',
  'directory.email': 'Courriel',
  'directory.created': 'Créé',
  'directory.company': 'Compagnie',
  'directory.stars.label': 'Étoiles',
  'directory.repos.label': 'Dépôts',
  'directory.repos.value': `{nStars, plural,
    =0 {aucun dépot}
    one {un dépot}
    other {# dépots}
  }`,
  'directory.languages': 'Langages',
  'directory.available': 'Disponible pour travailler',

  'sponsor.title': 'Commanditer le bottin',
  'sponsor.col1.html': `
<p class='lead'>
Est-ce que votre entreprise serait intéressée à voir son logo sur le bottin et ainsi encourager le développement à plus long terme du site et de sa communauté? Ce serait juste à temps pour la <a target='_blank' rel='noopener noreferrer' href='https://2018.sqil.info/'>Semaine québécoise de l’informatique libre</a> :-)
</p>
<p>
Depuis 2015, le nombre de développeurs au Québec a plus que doublé. Un nouveau bottin RoLLodeQc était devenu nécessaire. Maintenant qu’il est basé sur Gatsby, c’est plus facile de le mettre à jour et de l’adapter à un autre lieu.
</p>
<p>
Pour supporter le développement et le maintien du bottin, le site comptera quelques courtes publicités locales en rotation et disposera bientôt d’un espace pour des annonces plus longues comme des offres d’emplois et plus.
</p>
<p>
Contactez-nous en mentionnant le forfait choisi (annonce longue ou courte) pour que nous puissons mettre votre annonce en ligne le plus tôt possible.
</p>
`,
  'sponsor.col2.title': 'Forfaits disponibles',

  'sponsor.col2.html': `
<ul>
  <li><b>250$ pour 3 mois:</b> Longue annonce; offre d’empoi, etc.</li>
  <li><b>100$ pour 3 mois:</b> Logo, nom et un court message (max 15 mots); 3 espaces en rotation <b><sup>*</sup></b> sur la page d’accueil</li>
  <li><b>500$ par mois:</b> Option d’affichage permanent sur la page d’accueil <sup>*</sup></b> <i>(au lieu d’être en rotation</i>); 1 seul disponible chaque mois</li>
</ul>
`,

  'jumbotron.header.show': 'Plus d’info',
  'jumbotron.header.hide': 'Cacher l’entête',
  'jumbotron.more': 'En savoir plus',
  'jumbotron.text': `Bienvenue au répertoire des programmeurs de votre région (inscrits sur GitHub).
Ces outils de filtrage et de tri permettent de trouver rapidement la personne que vous cherchez.`
}
