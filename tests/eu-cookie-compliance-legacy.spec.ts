import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-legacy', [
    'https://www.legapallacanestro.com/',
    'https://www.drupalcenter.de/',
    'https://oszk.hu/',
    'https://www.bankingcheck.de/',
]);
