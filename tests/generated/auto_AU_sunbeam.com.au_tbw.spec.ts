import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sunbeam.com.au_tbw', ['https://www.sunbeam.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
