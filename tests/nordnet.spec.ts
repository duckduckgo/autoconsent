import generateCMPTests from '../playwright/runner';

generateCMPTests('nordnet', [
    'https://www.nordnet.dk/',
    'https://www.nordnet.se/se',
    'https://www.nordnet.no/no',
    'https://www.nordnet.fi/fi',
]);
