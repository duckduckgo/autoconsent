import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_hades.fandom.com_3wv', ['https://hades.fandom.com/wiki/Hades_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
