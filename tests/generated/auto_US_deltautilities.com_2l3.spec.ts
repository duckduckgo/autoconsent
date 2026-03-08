import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_deltautilities.com_2l3', ['https://deltautilities.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
