import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_silencershop.com_12d', ['https://www.silencershop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
