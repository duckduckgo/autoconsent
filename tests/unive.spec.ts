import generateCMPTests from '../playwright/runner';

generateCMPTests('unive', [
    'https://www.unive.nl/',
    'https://rechtshulp.unive.nl/',
    'https://rechtshulp.unive.nl/dossier-aanvullen',
    'https://buurtfonds.unive.nl/',
]);
