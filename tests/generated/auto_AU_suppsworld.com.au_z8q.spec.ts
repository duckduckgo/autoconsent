import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_suppsworld.com.au_z8q', ['https://suppsworld.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
