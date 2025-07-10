import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_crossidiomas.com_s95', ['https://crossidiomas.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
