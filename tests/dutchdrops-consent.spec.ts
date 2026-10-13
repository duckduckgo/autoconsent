import generateCMPTests from '../playwright/runner';

generateCMPTests('dutchdrops-consent', [
    'https://www.siebeljuweliers.nl/privacy-policy',
    'https://www.tasteclub.nl/',
    'https://www.grapedistrict.nl/',
]);
