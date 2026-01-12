import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lionbrand.com_7xv', ['https://www.lionbrand.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
