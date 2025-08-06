import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gramophone.co.uk_qd8', ['https://www.gramophone.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
