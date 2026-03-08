import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fairworkmate.com.au_k95', ['https://fairworkmate.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
