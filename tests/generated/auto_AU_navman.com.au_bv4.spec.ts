import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_navman.com.au_bv4', ['https://www.navman.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
