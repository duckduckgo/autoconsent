import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_coverworld.com.au_884', ['https://www.coverworld.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
