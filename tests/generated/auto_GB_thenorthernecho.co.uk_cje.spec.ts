import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thenorthernecho.co.uk_cje', ['https://www.thenorthernecho.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
