import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_federalpremium.com_5wm', ['https://www.federalpremium.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
