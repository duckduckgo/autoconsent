import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gramophone.co.uk_wx7', ['https://www.gramophone.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
