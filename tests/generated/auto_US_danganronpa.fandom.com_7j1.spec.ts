import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_danganronpa.fandom.com_7j1', ['https://danganronpa.fandom.com/wiki/Danganronpa_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
