import generateCMPTests from '../playwright/runner';

generateCMPTests('personalization-request', [
    'https://recordsale.de/',
    'https://flipvinyl.de/',
    'https://vinyl4rescue.org/',
    'https://anymator.de/',
]);
