import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_anthonyalbanese.com.au_20y', ['https://anthonyalbanese.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
