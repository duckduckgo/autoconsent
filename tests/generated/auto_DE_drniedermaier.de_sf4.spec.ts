import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_drniedermaier.de_sf4', ['https://drniedermaier.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
