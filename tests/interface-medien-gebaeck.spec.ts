import generateCMPTests from '../playwright/runner';

generateCMPTests('interface-medien-gebaeck', [
    'https://www.kraeuterhaus.de/',
    'https://www.brennenstuhl.com/',
    'https://www.febrotec.de/',
    'https://zero-lack.de/',
]);

// no banner shown in DE
generateCMPTests('interface-medien-gebaeck', ['https://www.burgerstein.ch/'], {
    skipRegions: ['DE'],
});
