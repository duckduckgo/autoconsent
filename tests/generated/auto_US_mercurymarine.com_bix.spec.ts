import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mercurymarine.com_bix', ['https://www.mercurymarine.com/us/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
