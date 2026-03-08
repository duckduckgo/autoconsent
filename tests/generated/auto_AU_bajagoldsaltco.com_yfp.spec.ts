import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bajagoldsaltco.com_yfp', ['https://bajagoldsaltco.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
