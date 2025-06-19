import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_coverworld.com.au_8r5', ['https://www.coverworld.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
