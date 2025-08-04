import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gramophone.co.uk_8yi', ['https://www.gramophone.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
