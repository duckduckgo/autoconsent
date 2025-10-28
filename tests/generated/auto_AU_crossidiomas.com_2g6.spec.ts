import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_crossidiomas.com_2g6', ['https://crossidiomas.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
