import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_doltonehouse.com.au_405', ['https://doltonehouse.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
