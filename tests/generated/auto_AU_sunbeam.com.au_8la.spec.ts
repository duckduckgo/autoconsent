import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sunbeam.com.au_8la', ['https://www.sunbeam.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
