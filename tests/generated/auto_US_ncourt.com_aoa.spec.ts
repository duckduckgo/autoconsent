import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ncourt.com_aoa', ['https://catalisgov.com/ncourt-lp/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
