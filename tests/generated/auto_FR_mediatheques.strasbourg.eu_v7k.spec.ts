import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mediatheques.strasbourg.eu_v7k', ['https://www.mediatheques.strasbourg.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
