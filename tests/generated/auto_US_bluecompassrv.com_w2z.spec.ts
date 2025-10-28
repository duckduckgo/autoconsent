import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bluecompassrv.com_w2z', ['https://www.bluecompassrv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
