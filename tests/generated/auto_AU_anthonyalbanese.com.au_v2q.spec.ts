import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_anthonyalbanese.com.au_v2q', ['https://anthonyalbanese.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
