import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_princesspolly.com.au_p1g', ['https://www.princesspolly.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
