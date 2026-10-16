import generateCMPTests from '../playwright/runner';

generateCMPTests('ionos.de', ['https://login.ionos.de/', 'https://login.ionos.es/', 'https://login.ionos.co.uk/'], {
    skipRegions: ['US'],
});

// these pages reload after the consent choice, which discards the self-test context
generateCMPTests('ionos.de', ['https://www.ionos.de/', 'https://www.ionos.co.uk/', 'https://www.ionos.it/'], {
    skipRegions: ['US'],
    testSelfTest: false,
});
