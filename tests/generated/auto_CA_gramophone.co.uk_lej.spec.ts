import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gramophone.co.uk_lej', ['https://www.gramophone.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
