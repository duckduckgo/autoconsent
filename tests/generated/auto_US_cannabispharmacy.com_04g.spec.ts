import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cannabispharmacy.com_04g', ['https://cannabispharmacy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
