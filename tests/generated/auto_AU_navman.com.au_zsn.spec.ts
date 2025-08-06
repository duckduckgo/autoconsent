import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_navman.com.au_zsn', ['https://www.navman.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
