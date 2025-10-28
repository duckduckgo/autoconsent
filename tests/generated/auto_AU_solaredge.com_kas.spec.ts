import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_solaredge.com_kas', ['https://www.solaredge.com/aus/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
