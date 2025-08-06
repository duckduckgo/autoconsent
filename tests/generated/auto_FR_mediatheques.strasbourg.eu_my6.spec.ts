import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mediatheques.strasbourg.eu_my6', ['https://www.mediatheques.strasbourg.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
