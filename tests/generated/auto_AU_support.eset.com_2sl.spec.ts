import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_support.eset.com_2sl', ['https://support.eset.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
