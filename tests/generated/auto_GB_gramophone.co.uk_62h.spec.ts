import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gramophone.co.uk_62h', ['https://www.gramophone.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
