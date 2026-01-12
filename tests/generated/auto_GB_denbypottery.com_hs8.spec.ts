import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_denbypottery.com_hs8', ['https://www.denbypottery.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
