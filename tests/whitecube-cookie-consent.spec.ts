import generateCMPTests from '../playwright/runner';

generateCMPTests('whitecube-cookie-consent', ['https://onestream.co.uk/', 'https://ddw.nl/en']);
generateCMPTests('whitecube-cookie-consent', ['https://woomie.ro/'], {
    onlyRegions: ['DE'],
});
