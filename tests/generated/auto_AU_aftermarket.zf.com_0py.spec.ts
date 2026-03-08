import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aftermarket.zf.com_0py', ['https://aftermarket.zf.com/us/aftermarket-portal/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
