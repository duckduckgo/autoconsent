import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_suppsworld.com.au_7lk', ['https://suppsworld.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
