import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_anthonyalbanese.com.au_zgi', ['https://anthonyalbanese.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
