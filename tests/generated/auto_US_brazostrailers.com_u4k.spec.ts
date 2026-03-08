import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_brazostrailers.com_u4k', ['https://brazostrailers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
