import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_zoomcorp.com_0cv', ['https://zoomcorp.com/en/gb/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
