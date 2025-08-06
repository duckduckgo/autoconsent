import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_kwm.com_7bh', ['https://www.kwm.com/au/en/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
