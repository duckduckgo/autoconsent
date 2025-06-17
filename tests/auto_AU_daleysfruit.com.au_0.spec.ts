import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_daleysfruit.com.au_0', ['https://www.daleysfruit.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
