import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_support.eset.com_ehu', ['https://support.eset.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
