import generateCMPTests from '../playwright/runner';

generateCMPTests('consent-mode-banner', [
    'https://www.pollenfloristry.co.uk/',
    'https://www.parcelbroker.co.uk/',
    'https://www.csrocketry.com/',
    'https://www.viamedica.pl/',
    'https://www.feser-graf.de/',
]);
