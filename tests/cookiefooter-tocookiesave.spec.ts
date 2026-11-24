import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiefooter-tocookiesave', [
    'https://www.apl.de/',
    'https://www.all-people-league.de/',
    'https://www.seg-niedersachsen.de/',
    'https://www.die-neuwagenvermittlung.de/',
]);
