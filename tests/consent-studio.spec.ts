import generateCMPTests from '../playwright/runner';

generateCMPTests('consent-studio', [
    'https://www.eur.nl/',
    'https://www.crunch.co.uk/',
    'https://www.christenunie.nl/',
    'https://www.moooi.com/',
    'https://www.dentonet.pl/',
    'https://www.budgetcam.nl/',
]);
