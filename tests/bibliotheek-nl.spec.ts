import generateCMPTests from '../playwright/runner';

generateCMPTests('bibliotheek-nl', [
    'https://onlinebibliotheek.nl/',
    'https://bibliotheek.nl/',
    'https://www.jeugdbibliotheek.nl/',
    'https://www.bibliotheekdenhaag.nl/',
    'https://www.obgz.nl/',
]);
