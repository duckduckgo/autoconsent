import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_film-rezensionen.de_tem', ['https://www.film-rezensionen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
