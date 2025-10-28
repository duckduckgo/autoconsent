import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_scenic.com.au_oli', ['https://www.scenic.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
