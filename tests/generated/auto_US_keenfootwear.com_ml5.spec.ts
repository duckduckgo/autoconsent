import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_keenfootwear.com_ml5', ['https://www.keenfootwear.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
