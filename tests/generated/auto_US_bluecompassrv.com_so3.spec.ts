import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bluecompassrv.com_so3', ['https://www.bluecompassrv.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
